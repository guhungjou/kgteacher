import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { KindergartenApiService } from '../../kindergarten-api.service';

@Component({
  selector: 'app-new-student-modal',
  templateUrl: './new-student-modal.component.html',
  styleUrls: ['./new-student-modal.component.scss'],
})
export class NewStudentModalComponent implements OnInit {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: KindergartenApiService,
    private sysApi: ApiService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.getSelf();
    this.formGroup = this.formBuilder.group({
      no: [null, []],
      name: [null, [Validators.required]],
      remark: [null, []],
      gender: [null, [Validators.required]],
      device: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
    });
  }

  classID = 0;

  async getSelf() {
    try {
      const r = await this.sysApi.getSelf();
      const self = r.data;
      if (self?.class_id) {
        this.classID = self?.class_id;
      }
    } catch (error) { }
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

    if (!this.classID) {
      this.message.warning('请选择班级');
      return;
    }

    const value = this.formGroup.value;
    const no = value.no;
    const name = value.name;
    const gender = value.gender;
    const remark = value.remark;
    const device = value.device;
    const birthday = value.birthday;
    this.createStudent(name, no, gender, remark, birthday, device, this.classID);
  }

  async createStudent(
    name: string,
    no: string,
    gender: string,
    remark: string,
    birthday: any,
    device: string,
    classID: number
  ) {
    try {
      this.loading = true;
      const r = await this.api.createStudent(
        name,
        no,
        gender,
        birthday,
        remark,
        device,
        classID
      );
      if (r.status === 21001) {
        this.message.warning('设备已使用');
      } else if (r.status === 21002) {
        this.message.warning('设备格式错误');
      } else if (r.status === 21003) {
        this.message.warning('学号重复');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('创建成功');
        this.close();
        this.formGroup.reset();
        this.update.emit(r.data);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  private validateDevice(control: AbstractControl) {
    const u = control.value || '';
    const res = /^([0-9A-Fa-f]{2}[:]?){5}([0-9A-Fa-f]{2})$/.exec(u);
    if (!res) {
      return { error: true };
    }
    return true;
  }
}
