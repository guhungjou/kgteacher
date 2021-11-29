import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit, OnChanges {
  @Input() classID = 0;
  query = '';
  queryGender = '';
  page = 1;
  pageSize = 10;
  total = 0;
  students: any[] = [];
  loading = false;

  constructor(private api: ApiService, private message: NzMessageService) {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.classID) {
      this.page = 1;
      this.pageSize = 10;
      this.findStudents();
    }
  }

  async findStudents() {
    try {
      this.loading = true;
      const r = await this.api.findStudents(
        this.query,
        this.classID,
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

  search() {
    this.page = 1;
    this.findStudents();
  }

  onPageChange() {
    this.findStudents();
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
}
