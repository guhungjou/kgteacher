import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from 'src/app/health/health-api.service';
import { formatRangeDate } from 'src/app/x/datetime';

@Component({
  selector: 'app-student-fitness-test-list',
  templateUrl: './student-fitness-test-list.component.html',
  styleUrls: ['./student-fitness-test-list.component.scss']
})
export class StudentFitnessTestListComponent implements OnInit, OnChanges {
  @Input() studentID = 0;
  query = '';
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  tests: any[] = [];
  loading = false;

  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.studentID) {
      this.pageSize = 10;
      this.search();
    }
  }

  search() {
    this.page = 1;
    this.findStudentFitnessTests();
  }

  onPageChange() {
    this.findStudentFitnessTests();
  }

  async findStudentFitnessTests() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate);
      const r = await this.api.findStudentFitnessTests(
        this.query,
        0,
        this.studentID,
        ranges[0],
        ranges[1],
        this.queryHeightWeightFilters,
        this.queryShuttleRunFilters,
        this.queryStandingLongJumpFilters,
        this.queryBaseballThrowFilters,
        this.queryBunnyHoppingFilters,
        this.querySitAndReachFilters,
        this.queryBalanceBeamFilters,
        this.queryTotalStatusFilters,
        this.page,
        this.pageSize
      );
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

  isFitnessTestModalVisible = false;
  fitnessTestData: any = {};
  showFitnessTestModal(data: any) {
    this.isFitnessTestModalVisible = true;
    this.fitnessTestData = Object.assign({}, data);
  }

  queryHeightWeightFilters: number[] = [];
  onHeightWeightChanged(d: number[]) {
    this.queryHeightWeightFilters = d;
    this.findStudentFitnessTests();
  }

  queryTotalStatusFilters: string[] = [];
  statusFilters = [{ text: '优秀', value: 'excellent' }, { text: '良好', value: 'good' }, { text: '合格', value: 'okay' }, { text: '不合格', value: 'fail' },];
  onTotalStatusChanged(d: string[]) {
    this.queryTotalStatusFilters = d;
    this.findStudentFitnessTests();
  }
}
