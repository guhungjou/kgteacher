import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';
import { KindergartenApiService } from '../../kindergarten-api.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss'],
})
export class TeacherListComponent implements OnInit, OnChanges {
  loading = false;
  query = '';
  page = 1;
  pageSize = 10;
  total = 0;
  teachers: any[] = [];
  @Input() classID = 0;
  constructor(private api: KindergartenApiService, private message: NzMessageService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if (this.classID) {
      this.page = 1;
      this.pageSize = 10;
      this.findTeachers();
    }
  }

  search() {
    this.page = 1;
    this.findTeachers();
  }

  onPageChange() {
    this.findTeachers();
  }

  async findTeachers() {
    try {
      this.loading = true;
      const r = await this.api.findTeachers(
        this.query,
        this.classID,
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

  isUpdateTeacherModalVisible = false;
  updateTeacherData: any = {};
  showUpdateTeacherModal(data: any) {
    this.isUpdateTeacherModalVisible = true;
    this.updateTeacherData = Object.assign({}, data);
  }

  isNewTeacherModalVisible = false;
  new() {
    this.isNewTeacherModalVisible = true;
  }
}
