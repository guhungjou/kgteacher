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
import { KindergartenApiService } from '../../kindergarten-api.service';

@Component({
  selector: 'app-update-teacher-modal',
  templateUrl: './update-teacher-modal.component.html',
  styleUrls: ['./update-teacher-modal.component.scss'],
})
export class UpdateTeacherModalComponent implements OnInit, OnChanges {
  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();

  @Input() data: any = {};

  loading = false;
  formGroup!: FormGroup;
  classID = 0;
  constructor(
    private api: KindergartenApiService,
    private message: NzMessageService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [{ value: '', disabled: true }, [Validators.required]],
      name: [null, [Validators.required]],
      phone: [null, []],
      gender: [null, [Validators.required]],
    });
  }

  ngOnChanges() {
    if (this.isVisible && this.data?.id) {
      this.formGroup.setValue({
        username: this.data.username,
        name: this.data.name,
        phone: this.data.phone,
        gender: this.data.gender,
      });
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
      const c = this.formGroup.controls[i];
      if (!c.disabled && !c.valid) {
        return;
      }
    }
    const value = this.formGroup.value;
    const name = value.name;
    const phone = value.phone;
    const gender = value.gender;
    this.updateTeacher(this.data.id, name, phone, gender, this.classID);
  }

  async updateTeacher(
    id: number,
    name: string,
    phone: string,
    gender: string,
    classID: number
  ) {
    try {
      this.loading = true;
      const r = await this.api.updateTeacher(id, name, gender, phone, classID);
      if (r.status === 20003) {
        this.message.warning('您没有编辑老师的权限，只有园长才能编辑老师');
      } else if (r.status !== 0) {
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
