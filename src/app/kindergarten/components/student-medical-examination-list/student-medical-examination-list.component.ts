import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from 'src/app/health/health-api.service';
import { formatRangeDate } from 'src/app/x/datetime';

@Component({
  selector: 'app-student-medical-examination-list',
  templateUrl: './student-medical-examination-list.component.html',
  styleUrls: ['./student-medical-examination-list.component.scss'],
})
export class StudentMedicalExaminationListComponent
  implements OnInit, OnChanges {
  @Input() studentID = 0;
  query = '';
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  exams: any[] = [];
  loading = false;

  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void { }

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
      const ranges = formatRangeDate(this.queryDate);
      const r = await this.api.findStudentMedicalExaminations(
        this.query,
        0,
        this.studentID,
        this.queryHeightFilters,
        this.queryWeightFilters,
        this.queryHemoglobinFilters,
        this.querySightFilters,
        this.queryALTFilters,
        this.queryBMIFilters,
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

  healthFilters = [{ text: '正常', value: 'normal' }, { text: '偏高', value: 'high' }, { text: '偏低', value: 'low' }];
  bmiFilters = [{ text: '正常', value: 'normal' }, { text: '肥胖', value: 'high' }, { text: '偏瘦', value: 'low' }];
  weightFilters = [{ text: '正常', value: 'normal' }, { text: '偏重', value: 'high' }, { text: '偏轻', value: 'low' }];
  sightFilters = [{ text: '正常', value: 'normal' }, { text: '近视', value: 'short' }, { text: '左眼近视', value: 'lshort' }, { text: '右眼近视', value: 'rshort' }, { text: '远视', value: 'long' }, { text: '左眼远视', value: 'llong' }, { text: '右眼远视', value: 'rlong' }, { text: '散光', value: 'ast' }, { text: '左眼散光', value: 'last' }, { text: '右眼散光', value: 'rast' }];

  queryHeightFilters: string[] = [];
  onHeightFilterChanged(d: string[]) {
    this.queryHeightFilters = d;
    this.findStudentMedicalExaminations();
  }

  queryWeightFilters: string[] = [];
  onWeightFilterChanged(d: string[]) {
    this.queryWeightFilters = d;
    this.findStudentMedicalExaminations();
  }

  queryHemoglobinFilters: string[] = [];
  onHemoglobinFilterChanged(d: string[]) {
    this.queryHemoglobinFilters = d;
    this.findStudentMedicalExaminations();
  }

  queryALTFilters: string[] = [];
  onALTFilterChanged(d: string[]) {
    this.queryALTFilters = d;
    this.findStudentMedicalExaminations();
  }

  querySightFilters: string[] = [];
  onSightFilterChanged(d: string[]) {
    this.querySightFilters = d;
    this.findStudentMedicalExaminations();
  }

  queryBMIFilters: string[] = [];
  onBMIFilterChanged(d: string[]) {
    this.queryBMIFilters = d;
    this.findStudentMedicalExaminations();
  }
}
