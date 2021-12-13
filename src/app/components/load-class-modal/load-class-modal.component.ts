import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { removeArrayIndex } from 'src/app/x/slice';

@Component({
  selector: 'app-load-class-modal',
  templateUrl: './load-class-modal.component.html',
  styleUrls: ['./load-class-modal.component.scss'],
})
export class LoadClassModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  file: any = null;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  close() {
    this.isClassListModalVisible = false;
    this.isVisible = false;
    this.file = null;
    this.isVisibleChange.emit(false);
  }

  onLoad() {
    if (!this.file || this.loading) {
      return;
    }
    this.loadClass();
  }

  downloadTemplate() {
    this.api.downloadLoadClassTemplate();
  }

  classes: any[] = [];

  async loadClass() {
    try {
      this.loading = true;
      const r = await this.api.loadClass(this.file);
      this.classes = r.data;
      this.isClassListModalVisible = true;
      for (const t of this.classes) {
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

  isClassListModalVisible = false;

  closeClassListModal() {
    this.isClassListModalVisible = false;
  }

  removeClass(data: any, i: number) {
    this.classes = removeArrayIndex(this.classes, i);
  }

  onOk() {
    if (this.classes.length === 0) {
      return;
    }
    for (const c of this.classes) {
      if (c.status.length !== 0) {
        this.message.warning('请先移除无效项');
        return;
      }
    }
    this.createKindergartenClassLoad();
  }

  async createKindergartenClassLoad() {
    try {
      this.loading = true;
      const r = await this.api.createClassLoad(this.classes);
      if (r.status === 22001) {
        this.message.warning('班级名重复');
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
