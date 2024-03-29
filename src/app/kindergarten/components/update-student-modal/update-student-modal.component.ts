import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
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
  selector: 'app-update-student-modal',
  templateUrl: './update-student-modal.component.html',
  styleUrls: ['./update-student-modal.component.scss'],
})
export class UpdateStudentModalComponent implements OnInit, OnChanges {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  @Input() data: any = {};
  loading = false;

  formGroup!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private api: KindergartenApiService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      no: [null, []],
      name: [null, [Validators.required]],
      remark: [null, []],
      gender: [null, [Validators.required]],
      device: [null, [Validators.required]],
      birthday: [null, [Validators.required]]
    });
  }

  classID = 0;
  ngOnChanges() {
    if (this.isVisible && this.data?.id) {
      this.formGroup.patchValue(this.data);
      this.classID = this.data.class_id;
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
    this.updateStudent(
      this.data.id,
      name,
      no,
      gender,
      birthday,
      remark,
      device,
      this.classID
    );
  }

  async updateStudent(
    id: number,
    name: string,
    no: string,
    gender: string,
    birthday: any,
    remark: string,
    device: string,
    classID: number
  ) {
    try {
      this.loading = true;
      const r = await this.api.updateStudent(
        id,
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
        this.message.success('更新成功');
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
