import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-self-password-modal',
  templateUrl: './update-self-password-modal.component.html',
  styleUrls: ['./update-self-password-modal.component.scss'],
})
export class UpdateSelfPasswordModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  loading = false;
  formGroup!: FormGroup;

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      old: [null, [Validators.required]],
      new1: [null, [Validators.required, Validators.minLength(8)]],
      new2: [null, [Validators.required, this.matchPassword]],
    });
  }

  private matchPassword(control: AbstractControl) {
    const u = control.value || '';
    if (!u || u !== control.parent?.value.new1) {
      return { error: true };
    }
    return true;
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
    const value = this.formGroup.value;
    const old = value.old;
    const n = value.new1;
    this.updateSelfPassword(old, n);
  }

  async updateSelfPassword(old: string, n: string) {
    try {
      this.loading = true;
      const r = await this.api.updateSelfPassword(old, n);
      if (r.status === 20002) {
        this.message.warning('原密码错误');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('修改成功');
        this.close();
        this.formGroup.reset();
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
