import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { defaultRanges, formatRangeDate } from 'src/app/x/datetime';
import { mergeRouter, parseDateRangesQuery, parseIntQuery, parseStringQuery } from 'src/app/x/router';
import { HealthApiService } from '../../health-api.service';

@Component({
  selector: 'app-student-fitness-test-list-page',
  templateUrl: './student-fitness-test-list-page.component.html',
  styleUrls: ['./student-fitness-test-list-page.component.scss']
})
export class StudentFitnessTestListPageComponent implements OnInit {

  query = '';
  queryClassID = 0;
  queryStudentID = 0;
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  tests: any[] = [];
  loading = false;

  ranges = defaultRanges();

  constructor(private api: HealthApiService, private message: NzMessageService,
    private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findStudentFitnessTests();
    });
  }

  ngOnInit(): void {
  }

  loadRouter() {
    this.query = parseStringQuery(this.route, 'query', '');
    this.queryClassID = parseIntQuery(this.route, 'class_id', 0);
    this.queryStudentID = parseIntQuery(this.route, 'student_id', 0);
    this.queryDate = parseDateRangesQuery(this.route, 'date', []);
    this.page = parseIntQuery(this.route, 'page', 1);
    this.pageSize = parseIntQuery(this.route, 'page_size', 10);
  }

  mergeRouter() {
    mergeRouter(this.router, this.route, {
      query: this.query,
      class_id: this.queryClassID,
      student_id: this.queryStudentID,
      date: this.queryDate.toString(),
      page: this.page,
      page_size: this.pageSize,
    });
  }

  search() {
    this.page = 1;
    this.mergeRouter();
  }

  async findStudentFitnessTests() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate);
      const r = await this.api.findStudentFitnessTests(this.query, this.queryClassID, this.queryStudentID, ranges[0], ranges[1], this.page, this.pageSize);
      const data = r.data;
      this.page = data.page;
      this.pageSize = data.page_size;
      this.total = data.total;
      this.tests = data.list;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  onPageChange() {
    this.mergeRouter();
  }

  export() {
    this.mergeRouter();
    const ranges = formatRangeDate(this.queryDate);
    this.api.exportStudentFitnessTests(this.query, this.queryClassID, this.queryStudentID, ranges[0], ranges[1], this.page, this.pageSize);
  }
}
