import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { removeArrayIndex } from 'src/app/x/slice';

@Component({
  selector: 'app-load-teacher-modal',
  templateUrl: './load-teacher-modal.component.html',
  styleUrls: ['./load-teacher-modal.component.scss'],
})
export class LoadTeacherModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  file: any = null;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  close() {
    this.isTeacherListModalVisible = false;
    this.isVisible = false;
    this.file = null;
    this.isVisibleChange.emit(false);
  }

  onLoad() {
    if (!this.file || this.loading) {
      return;
    }
    this.loadTeacher();
  }

  downloadTemplate() {
    this.api.downloadLoadTeacherTemplate();
  }

  teachers: any[] = [];

  async loadTeacher() {
    try {
      this.loading = true;
      const r = await this.api.loadTeacher(this.file);
      this.teachers = r.data;
      this.isTeacherListModalVisible = true;
      for (const t of this.teachers) {
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

  isTeacherListModalVisible = false;

  closeTeacherListModal() {
    this.isTeacherListModalVisible = false;
  }

  removeTeacher(data: any, i: number) {
    this.teachers = removeArrayIndex(this.teachers, i);
  }

  onOk() {
    if (this.teachers.length === 0) {
      return;
    }
    for (const t of this.teachers) {
      if (t.status.length !== 0) {
        this.message.warning('请先移除无效项');
        return;
      }
    }
    this.createKindergartenTeacherLoad();
  }

  async createKindergartenTeacherLoad() {
    try {
      this.loading = true;
      const r = await this.api.createKindergartenTeacherLoad(this.teachers);
      if (r.status === 20004) {
        this.message.warning('用户名重复');
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
