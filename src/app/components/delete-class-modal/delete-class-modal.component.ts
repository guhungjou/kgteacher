import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-delete-class-modal',
  templateUrl: './delete-class-modal.component.html',
  styleUrls: ['./delete-class-modal.component.scss'],
})
export class DeleteClassModalComponent implements OnInit, OnChanges {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Input() data: any = {};
  @Output() update = new EventEmitter<any>();
  loading = false;

  withStudent = false;
  withTeacher = false;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isVisible) {
      this.withStudent = true;
      this.withTeacher = true;
    }
  }

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  onOk() {
    this.deleteClass();
  }

  async deleteClass() {
    if (!this.data?.id) {
      return;
    }
    try {
      this.loading = true;
      const r = await this.api.deleteClass(
        this.data.id,
        this.withStudent,
        this.withTeacher
      );
      if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('删除成功');
        this.close();
        this.update.emit(null);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
