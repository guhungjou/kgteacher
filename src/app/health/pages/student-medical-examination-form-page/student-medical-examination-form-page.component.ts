import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-student-medical-examination-form-page',
  templateUrl: './student-medical-examination-form-page.component.html',
  styleUrls: ['./student-medical-examination-form-page.component.scss'],
})
export class StudentMedicalExaminationFormPageComponent implements OnInit {
  id: number = 0;
  data: any = null;

  constructor(
    private title: Title,
    private route: ActivatedRoute,
    private message: NzMessageService,
    private api: HealthApiService
  ) {
    this.title.setTitle('体检报告');

    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10) || 0;
  }

  ngOnInit(): void {
    this.getStudentMedicalExamination(this.id);
  }

  async getStudentMedicalExamination(id: number) {
    if (!id || id <= 0) {
      return;
    }
    try {
      const r = await this.api.getStudentMedicalExamination(id);
      this.data = r.data;

      this.title.setTitle(
        '体检报告 - ' +
        this.data?.student?.class?.name +
        ' - ' +
        this.data?.student?.name
      );
    } catch (error) { }
  }
}
