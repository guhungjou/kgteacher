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
  selector: 'app-new-teacher-modal',
  templateUrl: './new-teacher-modal.component.html',
  styleUrls: ['./new-teacher-modal.component.scss'],
})
export class NewTeacherModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();

  formGroup!: FormGroup;
  classID = 0;
  loading = false;
  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [
        null,
        [Validators.required, Validators.minLength(6), this.validateUsername],
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
      name: [null, [Validators.required]],
      phone: [null, []],
      gender: ['female', [Validators.required]],
    });
  }

  private validateUsername(control: AbstractControl) {
    const u = control.value || '';
    const res = /^[A-Za-z][A-Za-z0-9]{5,20}$/.exec(u);
    if (!res) {
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
      if (!this.formGroup.controls[i].valid) {
        return;
      }
    }
    const value = this.formGroup.value;
    const username = value.username;
    const password = value.password;
    const name = value.name;
    const phone = value.phone;
    const gender = value.gender;
    this.createTeacher(username, password, name, phone, gender, this.classID);
  }

  async createTeacher(
    username: string,
    password: string,
    name: string,
    phone: string,
    gender: string,
    classID: number
  ) {
    try {
      this.loading = true;
      const r = await this.api.createTeacher(
        username,
        password,
        name,
        gender,
        phone,
        classID
      );
      if (r.status === 20004) {
        this.message.warning('用户名已存在，请重新输入');
      } else if (r.status === 20003) {
        this.message.warning('您没有创建老师的权限，只有园长才能创建老师');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('创建成功');
        this.formGroup.reset();
        this.close();
        this.update.emit(r.data);
        this.classID = 0;
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
