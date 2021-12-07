import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-class-modal',
  templateUrl: './update-class-modal.component.html',
  styleUrls: ['./update-class-modal.component.scss'],
})
export class UpdateClassModalComponent implements OnInit, OnChanges {
  @Input() data: any = {};
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  formGroup!: FormGroup;
  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      remark: [null, []],
    });
  }

  ngOnChanges() {
    if (this.isVisible && this.data?.id) {
      this.formGroup.setValue({
        name: this.data.name,
        remark: this.data.remark,
      });
    }
  }

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  onOk() {
    for (const i of Object.keys(this.formGroup.controls)) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
    for (const i of Object.keys(this.formGroup.controls)) {
      const c = this.formGroup.controls[i];
      if (!c.disabled && !c.valid) {
        return;
      }
    }
    if (!this.data?.id) {
      return;
    }
    const value = this.formGroup.value;
    const name = value.name;
    const remark = value.remark;
    this.updateClass(this.data.id, name, remark);
  }

  async updateClass(id: number, name: string, remark: string) {
    try {
      this.loading = true;
      const r = await this.api.updateClass(id, name, remark);
      if (r.status === 20003) {
        this.message.warning('您没有编辑班级的权限，只有园长才能编辑班级');
      } else if (r.status === 22001) {
        this.message.warning('班级名重复，请重新输入');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('更新成功');
        this.close();
        this.update.emit(r.data);
      }
    } catch (error) {
      this.message.success('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
