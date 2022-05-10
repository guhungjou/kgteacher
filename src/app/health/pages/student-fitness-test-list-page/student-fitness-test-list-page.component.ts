import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { defaultRanges, formatRangeDate } from 'src/app/x/datetime';
import { mergeRouter, parseDateRangesQuery, parseIntArrayQuery, parseIntQuery, parseStringQuery } from 'src/app/x/router';
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
  queryDate: any[] = [];
  page = 1;
  pageSize = 10;
  total = 0;
  tests: any[] = [];
  loading = false;

  ranges = defaultRanges();

  constructor(private api: HealthApiService, private message: NzMessageService,
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const status = this.route.snapshot.queryParamMap.get('_status');
    if (status) {
      for (const s of this.statusFilters) {
        if (s.value === status) {
          s.byDefault = true;
          this.queryTotalStatusFilters = [s.value];
        }
      }
    }
    const date = this.route.snapshot.queryParamMap.get('_date');
    if (date) {
      const n = new Date(date);
      this.queryDate = [n, n];
    }
    const classID = this.route.snapshot.queryParamMap.get('_class_id');
    if (classID) {
      this.queryClassID = parseInt(classID);
    }
    this.mergeRouter();

    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findStudentFitnessTests();
    });
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
      const r = await this.api.findStudentFitnessTests(
        this.query, this.queryClassID, this.queryStudentID, ranges[0], ranges[1],
        this.queryHeightWeightFilters,
        this.queryShuttleRunFilters, this.queryStandingLongJumpFilters, this.queryBaseballThrowFilters,
        this.queryBunnyHoppingFilters, this.querySitAndReachFilters, this.queryBalanceBeamFilters,
        this.queryTotalStatusFilters, this.page, this.pageSize);
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

  scoreFilters = [{ text: '0分', value: 0 }, { text: '1分', value: 1 }, { text: '2分', value: 2 }, { text: '3分', value: 3 }, { text: '4分', value: 4 }, { text: '5分', value: 5 }];
  queryShuttleRunFilters: number[] = [];
  onShuttleRunFiltersChanged(d: number[]) {
    this.queryShuttleRunFilters = d;
    this.findStudentFitnessTests();
  }

  queryStandingLongJumpFilters: number[] = [];
  onStandingLongJumpFiltersChanged(d: number[]) {
    this.queryStandingLongJumpFilters = d;
    this.findStudentFitnessTests();
  }

  queryBaseballThrowFilters: number[] = [];
  onBaseballThrowFiltersChanged(d: number[]) {
    this.queryBaseballThrowFilters = d;
    this.findStudentFitnessTests();
  }

  queryBunnyHoppingFilters: number[] = [];
  onBunnyHoppingFiltersChanged(d: number[]) {
    this.queryBunnyHoppingFilters = d;
    this.findStudentFitnessTests();
  }

  querySitAndReachFilters: number[] = [];
  onSitAndReachFiltersChanged(d: number[]) {
    this.querySitAndReachFilters = d;
    this.findStudentFitnessTests();
  }

  queryBalanceBeamFilters: number[] = [];
  onBalanceBeamFiltersChanged(d: number[]) {
    this.queryBalanceBeamFilters = d;
    this.findStudentFitnessTests();
  }

  queryHeightWeightFilters: number[] = [];
  onHeightWeightChanged(d: number[]) {
    this.queryHeightWeightFilters = d;
    this.findStudentFitnessTests();
  }


  isFitnessTestModalVisible = false;
  fitnessTestData: any = {};
  showFitnessTestModal(data: any) {
    this.isFitnessTestModalVisible = true;
    this.fitnessTestData = Object.assign({}, data);
  }

  queryTotalStatusFilters: string[] = [];
  statusFilters = [{ text: '优秀', value: 'excellent', byDefault: false }, { text: '良好', value: 'good' }, { text: '合格', value: 'okay' }, { text: '不合格', value: 'fail' },];
  onTotalStatusChanged(d: string[]) {
    this.queryTotalStatusFilters = d;
    this.findStudentFitnessTests();
  }
}
