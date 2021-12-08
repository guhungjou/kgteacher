import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { mergeRouter, parseIntQuery, parseStringQuery } from 'src/app/x/router';

@Component({
  selector: 'app-teacher-list-page',
  templateUrl: './teacher-list-page.component.html',
  styleUrls: ['./teacher-list-page.component.scss'],
})
export class TeacherListPageComponent implements OnInit {
  query = '';
  queryClassID = 0;
  loading = false;
  page = 1;
  pageSize = 10;
  total = 0;
  teachers: any[] = [];

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute,
    private title: Title
  ) {
    this.title.setTitle('幼儿园 - 老师');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findTeachers();
    });
  }

  search() {
    this.page = 1;
    this.mergeRouter();
  }

  mergeRouter() {
    mergeRouter(this.router, this.route, {
      query: this.query,
      class_id: this.queryClassID,
      page: this.page,
      page_size: this.pageSize,
    });
  }

  loadRouter() {
    this.query = parseStringQuery(this.route, 'query', '');
    this.queryClassID = parseIntQuery(this.route, 'class_id', 0);
    this.page = parseIntQuery(this.route, 'page', 1);
    this.pageSize = parseIntQuery(this.route, 'page_size', 10);
  }

  onPageChange() {
    this.mergeRouter();
  }

  async findTeachers() {
    try {
      this.loading = true;
      const r = await this.api.findTeachers(
        this.query,
        this.queryClassID,
        this.page,
        this.pageSize
      );
      const data = r.data;
      this.page = data.page;
      this.pageSize = data.page_size;
      this.total = data.total;
      this.teachers = data.list;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  isNewTeacherModalVisible = false;
  new() {
    this.isNewTeacherModalVisible = true;
  }

  isUpdateTeacherModalVisible = false;
  updateTeacherData: any = {};
  showUpdateTeacherModal(data: any) {
    this.isUpdateTeacherModalVisible = true;
    this.updateTeacherData = Object.assign({}, data);
  }

  isLoadTeacherModalVisible = false;
  load() {
    this.isLoadTeacherModalVisible = true;
  }
}
