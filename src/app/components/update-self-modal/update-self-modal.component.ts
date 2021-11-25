import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-update-self-modal',
  templateUrl: './update-self-modal.component.html',
  styleUrls: ['./update-self-modal.component.scss']
})
export class UpdateSelfModalComponent implements OnInit, OnChanges {

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  formGroup!: FormGroup;

  constructor(private api: ApiService, private message: NzMessageService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [{ value: '', disabled: true }, [Validators.required]],
      name: [null, [Validators.required]],
      phone: [null, []],
      gender: [null, [Validators.required]]
    });
  }

  ngOnChanges() {
    if (this.isVisible) {
      this.getSelf();
    }
  }

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  self: any = {};
  async getSelf() {
    try {
      const r = await this.api.getSelf();
      this.self = r.data;
      this.formGroup.setValue({
        username: this.self.username,
        name: this.self.name,
        phone: this.self.phone,
        gender: this.self.gender,
      })
      this.formGroup.updateValueAndValidity();
    } catch (error) {

    }
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
    const name = value.name;
    const gender = value.gender;
    const phone = value.phone;
    this.updateSelf(name, phone, gender);
  }

  async updateSelf(name: string, phone: string, gender: string) {
    try {
      this.loading = true;
      const r = await this.api.updateSelf(name, phone, gender);
      if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('更新成功');
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
