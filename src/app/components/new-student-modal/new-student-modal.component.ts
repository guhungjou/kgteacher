import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new-student-modal',
  templateUrl: './new-student-modal.component.html',
  styleUrls: ['./new-student-modal.component.scss']
})
export class NewStudentModalComponent implements OnInit {

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();
  loading = false;

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private message: NzMessageService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [null, [Validators.required]],
      remark: [null, []],
      gender: [null, [Validators.required]],
      device: [null, [Validators.required]],
    });
  }

  classID = 0;

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
    const name = value.name;
    const gender = value.gender;
    const remark = value.remark;
    const device = value.device;
    this.createStudent(name, gender, remark, device, this.classID);
  }

  async createStudent(name: string, gender: string, remark: string, device: string, classID: number) {
    try {
      this.loading = true;
      const r = await this.api.createStudent(name, gender, remark, device, classID);
      if (r.status === 21001) {
        this.message.warning('设备已使用');
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

}
