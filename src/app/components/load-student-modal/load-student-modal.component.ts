import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { removeArrayIndex } from 'src/app/x/slice';

@Component({
  selector: 'app-load-student-modal',
  templateUrl: './load-student-modal.component.html',
  styleUrls: ['./load-student-modal.component.scss'],
})
export class LoadStudentModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  file: any = null;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  close() {
    this.isStudentListModalVisible = false;
    this.isVisible = false;
    this.file = null;
    this.isVisibleChange.emit(false);
  }

  onLoad() {
    if (!this.file || this.loading) {
      return;
    }
    this.loadStudent();
  }

  downloadTemplate() {
    this.api.downloadLoadStudentTemplate();
  }

  students: any[] = [];

  async loadStudent() {
    try {
      this.loading = true;
      const r = await this.api.loadStudent(this.file);
      this.students = r.data;
      this.isStudentListModalVisible = true;
      for (const t of this.students) {
        t.statusmap = {};
        for (const s of t.status) {
          t.statusmap[s] = true;
        }
      }
    } catch (error) {
      this.message.error('未知错误');
    } finally {
      this.loading = false;
    }
  }

  isStudentListModalVisible = false;

  closeStudentListModal() {
    this.isStudentListModalVisible = false;
  }

  removeStudent(data: any, i: number) {
    this.students = removeArrayIndex(this.students, i);
  }

  onOk() {
    if (this.students.length === 0) {
      return;
    }
    for (const t of this.students) {
      if (t.status.length !== 0) {
        this.message.warning('请先移除无效项');
        return;
      }
    }
    this.createKindergartenStudentLoad();
  }

  async createKindergartenStudentLoad() {
    try {
      this.loading = true;
      const r = await this.api.createStudentLoad(this.students);
      if (r.status === 21001) {
        this.message.warning('设备重复');
      } else if (r.status === 21002) {
        this.message.warning('设备格式错误');
      } else if (r.status === 20003) {
        this.message.warning('您没有创建老师的权限，只有园长才能创建老师');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('创建成功');
        this.close();
        this.update.emit(r.data);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
