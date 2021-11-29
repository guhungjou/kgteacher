import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { mergeRouter, parseIntQuery, parseRouterQuery } from 'src/app/x/router';

@Component({
  selector: 'app-class-list-page',
  templateUrl: './class-list-page.component.html',
  styleUrls: ['./class-list-page.component.scss'],
})
export class ClassListPageComponent implements OnInit {
  query = '';
  page = 1;
  pageSize = 10;
  total = 0;
  classes: any[] = [];
  loading = false;

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('幼儿园 - 班级');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findClasses();
    });
  }

  search() {
    this.page = 1;
    this.mergeRouter();
  }

  onPageChange() {
    this.mergeRouter();
  }

  mergeRouter() {
    mergeRouter(this.router, this.route, {
      query: this.query,
      page: this.page,
      page_size: this.pageSize,
    });
  }

  loadRouter() {
    this.query = parseRouterQuery(this.route, 'query');
    this.page = parseIntQuery(this.route, 'page', 1);
    this.pageSize = parseIntQuery(this.route, 'page_size', 10);
  }

  async findClasses() {
    try {
      this.loading = true;
      const r = await this.api.findClasses(
        this.query,
        this.page,
        this.pageSize
      );
      const data = r.data;
      this.classes = data.list;
      this.page = data.page;
      this.pageSize = data.page_size;
      this.total = data.total;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  new() {
    this.isNewClassModalVisible = true;
  }

  isNewClassModalVisible = false;
  isUpdateClassModalVisible = false;
  updateClassData: any = {};
  showUpdateClassModal(data: any) {
    this.isUpdateClassModalVisible = true;
    this.updateClassData = Object.assign({}, data);
  }

  isClassModalVisible = false;
  classData: any = {};
  showClassModal(data: any) {
    this.isClassModalVisible = true;
    this.classData = Object.assign({}, data);
  }
}
