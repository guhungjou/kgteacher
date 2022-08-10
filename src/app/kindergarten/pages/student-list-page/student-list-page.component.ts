import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiService } from 'src/app/services/api.service';
import { mergeRouter, parseIntQuery, parseStringQuery } from 'src/app/x/router';
import { KindergartenApiService } from '../../kindergarten-api.service';

@Component({
  selector: 'app-student-list-page',
  templateUrl: './student-list-page.component.html',
  styleUrls: ['./student-list-page.component.scss'],
})
export class StudentListPageComponent implements OnInit {
  query = '';
  queryClassID = 0;
  queryGender = '';
  loading = false;
  page = 1;
  pageSize = 10;
  total = 0;
  students: any[] = [];
  constructor(
    private title: Title,
    private api: KindergartenApiService,
    private message: NzMessageService,
    private route: ActivatedRoute,
    private router: Router,
    private modal: NzModalService
  ) {
    this.title.setTitle('幼儿园 - 学生');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      this.loadRouter();
      this.findStudents();
    });
  }

  mergeRouter() {
    mergeRouter(this.router, this.route, {
      query: this.query,
      class_id: this.queryClassID,
      gender: this.queryGender,
      page: this.page,
      page_size: this.pageSize,
    });
  }

  loadRouter() {
    this.query = parseStringQuery(this.route, 'query', '');
    this.queryClassID = parseIntQuery(this.route, 'class_id', 0);
    this.page = parseIntQuery(this.route, 'page', 1);
    this.pageSize = parseIntQuery(this.route, 'page_size', 10);
    this.queryGender = parseStringQuery(this.route, 'gender', '');
  }

  search() {
    this.page = 1;
    this.mergeRouter();
  }

  onPageChange() {
    this.mergeRouter();
  }

  async findStudents() {
    try {
      this.loading = true;
      const r = await this.api.findStudents(
        this.query,
        this.queryClassID,
        this.queryGender,
        this.page,
        this.pageSize
      );
      const data = r.data;
      this.page = data.page;
      this.pageSize = data.page_size;
      this.total = data.total;
      this.students = data.list;
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }

  async export() {
    this.search();
    this.api.exportStudents(
      this.query,
      this.queryClassID,
      this.queryGender,
    );
  }

  isNewStudentModalVisible = false;
  new() {
    this.isNewStudentModalVisible = true;
  }

  isUpdateStudentModalVisible = false;
  updateStudentData: any = {};
  showUpdateStudentModal(data: any) {
    this.isUpdateStudentModalVisible = true;
    this.updateStudentData = Object.assign({}, data);
  }

  isStudentModalVisible = false;
  studentData: any = {};
  showStudentModal(data: any) {
    this.isStudentModalVisible = true;
    this.studentData = Object.assign({}, data);
  }

  isLoadStudentModalVisible = false;
  load() {
    this.isLoadStudentModalVisible = true;
  }

  delete(data: any) {
    this.modal.confirm({
      nzTitle: '删除学生',
      nzContent:
        '是否确认删除学生 <b>' +
        data.class?.name +
        ' - ' +
        data.name +
        '</b>？<br>删除该学生后设备可以重新绑定。',
      nzOkDanger: true,
      nzOnOk: () => this.deleteStudent(data.id),
    });
  }

  async deleteStudent(id: number) {
    try {
      this.loading = true;
      const r = await this.api.deleteStudent(id);
      if (r.status === 20003) {
        this.message.warning('您无权删除非本班级的学生');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        this.message.success('删除成功');
        this.findStudents();
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
