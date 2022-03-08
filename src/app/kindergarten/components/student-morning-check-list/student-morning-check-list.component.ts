import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HealthApiService } from 'src/app/health/health-api.service';
import { ApiService } from 'src/app/services/api.service';
import { formatRangeDate } from 'src/app/x/datetime';

@Component({
  selector: 'app-student-morning-check-list',
  templateUrl: './student-morning-check-list.component.html',
  styleUrls: ['./student-morning-check-list.component.scss'],
})
export class StudentMorningCheckListComponent implements OnInit, OnChanges {
  page = 1;
  pageSize = 10;
  queryDate = [];
  total = 0;
  checks: any[] = [];
  loading = false;
  @Input() studentID = 0;
  constructor(private api: HealthApiService, private message: NzMessageService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if (this.studentID) {
      this.pageSize = 10;
      this.search();
    }
  }

  onPageChange() {
    this.findStudentMorningChecks();
  }

  search() {
    this.findStudentMorningChecks();
  }

  async findStudentMorningChecks() {
    try {
      this.loading = true;
      const ranges = formatRangeDate(this.queryDate);
      const r = await this.api.findStudentMorningChecks(
        '',
        0,
        this.studentID,
        [],
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
}
