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
  parseStringArrayQuery,
  parseStringQuery,
} from 'src/app/x/router';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-student-morning-check-list-page',
  templateUrl: './student-morning-check-list-page.component.html',
  styleUrls: ['./student-morning-check-list-page.component.scss'],
})
export class StudentMorningCheckListPageComponent implements OnInit {
  query = '';
  queryClassID = 0;
  queryStudentID = 0;
  queryTemperatureFilters: string[] = [];
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  checks: any[] = [];
  loading = false;

  ranges = defaultRanges();

  constructor(
    private api: HealthApiService,
    private message: NzMessageService,
    private title: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.title.setTitle('健康管理 - 晨检');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findStudentMorningChecks();
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
      // temperature_filters: this.queryTemperatureFilters.toString(),
    });
  }

  loadRouter() {
    this.query = parseStringQuery(this.route, 'query', '');
    this.queryClassID = parseIntQuery(this.route, 'class_id', 0);
    this.queryStudentID = parseIntQuery(this.route, 'student_id', 0);
    this.page = parseIntQuery(this.route, 'page', 1);
    this.pageSize = parseIntQuery(this.route, 'page_size', 10);
    this.queryDate = parseDateRangesQuery(this.route, 'date', []);
    // this.queryTemperatureFilters = parseStringArrayQuery(this.route, 'temperature_filters', []);
  }

  search() {
    this.page = 1;
    this.mergeRouter();
  }

  onPageChange() {
    this.mergeRouter();
  }

  async findStudentMorningChecks() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate);
      const r = await this.api.findStudentMorningChecks(
        this.query,
        this.queryClassID,
        this.queryStudentID,
        this.queryTemperatureFilters,
        ranges[0],
        ranges[1],
        this.page,
        this.pageSize
      );
      const data = r.data;
      this.page = data.page;
      this.pageSize = data.page_size;
      this.total = data.total;
      this.checks = data.list;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  export() {
    const ranges = formatRangeDate(this.queryDate);
    this.api.exportStudentMorningChecks(
      this.query,
      this.queryClassID,
      this.queryStudentID,
      this.queryTemperatureFilters,
      ranges[0],
      ranges[1],
      this.page,
      this.pageSize
    );
  }

  temperatureFilters = [{ text: '正常', value: 'normal' }, { text: '偏高', value: 'high' }, { text: '偏低', value: 'low' }];
  onTemperatureFilterChanged(d: any) {
    this.queryTemperatureFilters = d;
    this.mergeRouter();
  }
}
