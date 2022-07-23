import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-batch-new-student-medical-examination-modal',
  templateUrl: './batch-new-student-medical-examination-modal.component.html',
  styleUrls: ['./batch-new-student-medical-examination-modal.component.scss']
})
export class BatchNewStudentMedicalExaminationModalComponent implements OnInit {

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<any>();

  classID = 0;
  file: any = null;

  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  onOk() {
    if (!this.classID || !this.file) {
      this.message.warning('请选择班级和体检文件');
      return;
    }
    this.batchCreateKindergartenStudentMedicalExaminationALT(this.classID, this.file);
  }

  loading = false;
  async batchCreateKindergartenStudentMedicalExaminationALT(classID: number, file: any) {
    try {
      this.loading = true;
      const r = await this.api.batchCreateKindergartenStudentMedicalExaminationALT(classID, file);
      if (r.status === 21004) {
        this.message.warning('学号不存在 - ' + r.data);
      } else if (r.status === 21005) {
        this.message.warning('学生姓名不存在 - ' + r.data);
      } else if (r.status === 21006) {
        this.message.warning('学生姓名重复 - ' + r.data);
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('上传成功');
        this.update.emit(null);
        this.close();
        this.file = null;
        this.classID = 0;
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
