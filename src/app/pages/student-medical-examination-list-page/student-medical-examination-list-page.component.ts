import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { defaultRanges, formatRangeDate } from 'src/app/x/datetime';
import {
  mergeRouter,
  parseDateRangesQuery,
  parseIntQuery,
  parseStringQuery,
} from 'src/app/x/router';

@Component({
  selector: 'app-student-medical-examination-list-page',
  templateUrl: './student-medical-examination-list-page.component.html',
  styleUrls: ['./student-medical-examination-list-page.component.scss'],
})
export class StudentMedicalExaminationListPageComponent implements OnInit {
  query = '';
  queryClassID = 0;
  queryStudentID = 0;
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  exams: any[] = [];
  loading = false;

  ranges = defaultRanges(false);

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title.setTitle('健康管理 - 体检');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findStudentMedicalExaminations();
    });
  }

  mergeRouter() {
    mergeRouter(this.router, this.route, {
      query: this.query,
      class_id: this.queryClassID,
      student_id: this.queryStudentID,
      page: this.page,
      page_size: this.pageSize,
      date: this.queryDate.toString(),
    });
  }

  loadRouter() {
    this.query = parseStringQuery(this.route, 'query', '');
    this.queryClassID = parseIntQuery(this.route, 'class_id', 0);
    this.queryStudentID = parseIntQuery(this.route, 'student_id', 0);
    this.page = parseIntQuery(this.route, 'page', 1);
    this.pageSize = parseIntQuery(this.route, 'page_size', 10);
    this.queryDate = parseDateRangesQuery(this.route, 'date', []);
  }
  search() {
    this.page = 1;
    this.mergeRouter();
  }

  onPageChange() {
    this.mergeRouter();
  }

  async findStudentMedicalExaminations() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate, false);
      const r = await this.api.findStudentMedicalExaminations(
        this.query,
        this.queryClassID,
        this.queryStudentID,
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

  export() {
    const ranges = formatRangeDate(this.queryDate, false);
    this.api.exportStudentMedicalExaminations(
      this.query,
      this.queryClassID,
      this.queryStudentID,
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
  }

  showExamFormModal(data: any) {
    const printSpecs =
      'toolbar=no, menubar=no, resizable=yes, status=no, titlebar=no';

    window.open('/student/medical/exam/form/' + data.id, '_blank', printSpecs);
  }

  healthFilters = [{ text: '正常', value: 'normal' }, { text: '偏高', value: 'high' }, { text: '偏低', value: 'low' }];
  bmiFilters = [{ text: '正常', value: 'normal' }, { text: '肥胖', value: 'high' }, { text: '偏瘦', value: 'low' }];
  weightFilters = [{ text: '正常', value: 'normal' }, { text: '偏重', value: 'high' }, { text: '偏轻', value: 'low' }];
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
