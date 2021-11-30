import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { defaultRanges, formatRangeDate } from 'src/app/x/datetime';
import { mergeRouter, parseDateRangesQuery, parseIntQuery, parseStringQuery } from 'src/app/x/router';

@Component({
  selector: 'app-student-morning-check-list-page',
  templateUrl: './student-morning-check-list-page.component.html',
  styleUrls: ['./student-morning-check-list-page.component.scss']
})
export class StudentMorningCheckListPageComponent implements OnInit {

  query = '';
  queryClassID = 0;
  queryStudentID = 0;
  queryDate = [];
  page = 1;
  pageSize = 10;
  total = 0;
  checks: any[] = [];
  loading = false;

  ranges = defaultRanges(false)

  constructor(private api: ApiService, private message: NzMessageService,
    private title: Title, private route: ActivatedRoute, private router: Router) {
    this.title.setTitle('健康管理 - 晨检');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findStudentMorningChecks();
    })
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

  async findStudentMorningChecks() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate, false);
      const r = await this.api.findStudentMorningChecks(this.query, this.queryClassID, this.queryStudentID, ranges[0], ranges[1], this.page, this.pageSize)
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

}
