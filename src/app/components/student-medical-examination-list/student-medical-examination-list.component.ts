import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { formatRangeDate } from 'src/app/x/datetime';

@Component({
  selector: 'app-student-medical-examination-list',
  templateUrl: './student-medical-examination-list.component.html',
  styleUrls: ['./student-medical-examination-list.component.scss'],
})
export class StudentMedicalExaminationListComponent
  implements OnInit, OnChanges
{
  @Input() studentID = 0;
  query = '';
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  exams: any[] = [];
  loading = false;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.studentID) {
      this.pageSize = 10;
      this.search();
    }
  }

  search() {
    this.page = 1;
    this.findStudentMedicalExaminations();
  }

  onPageChange() {
    this.findStudentMedicalExaminations();
  }

  async findStudentMedicalExaminations() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate, false);
      const r = await this.api.findStudentMedicalExaminations(
        this.query,
        0,
        this.studentID,
        ranges[0],
        ranges[1],
        this.page,
        this.pageSize
      );
      const data = r.data;
      this.page = data.page;
      this.pageSize = data.page_size;
      this.total = data.total;
      this.exams = data.list;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  showExamFormModal(data: any) {
    const printSpecs =
      'toolbar=no, menubar=no, resizable=yes, status=no, titlebar=no';

    window.open('/student/medical/exam/form/' + data.id, '_blank', printSpecs);
  }
}
