import { Injectable } from '@angular/core';
import { HttpService } from '../base/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class KindergartenApiService {

  constructor(private http: HttpService) { }

  findClasses(query: string, page: number, pageSize: number) {
    const q = { query, page, page_size: pageSize };
    const url = this.http.buildurl('/classes', q);
    return this.http.get(url);
  }

  findSelfClasses(query: string, page: number, pageSize: number) {
    const q = { query, page, page_size: pageSize };
    const url = this.http.buildurl('/self/classes', q);
    return this.http.get(url);
  }

  createClass(name: string, remark: string) {
    const url = this.http.buildurl('/class');
    const body = { name, remark };
    return this.http.post(url, body);
  }

  updateClass(id: number, name: string, remark: string) {
    const url = this.http.buildurl('/class/' + id);
    const body = { name, remark };
    return this.http.put(url, body);
  }

  findTeachers(query: string, classID: number, page: number, pageSize: number) {
    const q = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
    };
    const url = this.http.buildurl('/teachers', q);
    return this.http.get(url);
  }

  createTeacher(
    username: string,
    password: string,
    name: string,
    gender: string,
    phone: string,
    classID: number
  ) {
    const url = this.http.buildurl('/teacher');
    const body = {
      username,
      password,
      name,
      gender,
      phone,
      class_id: classID,
    };
    return this.http.post(url, body);
  }

  updateTeacher(
    id: number,
    name: string,
    gender: string,
    phone: string,
    classID: number
  ) {
    const url = this.http.buildurl('/teacher/' + id);
    const body = { name, phone, gender, class_id: classID };
    return this.http.put(url, body);
  }

  getClass(id: number) {
    const url = this.http.buildurl('/class/' + id);
    return this.http.fget(url);
  }

  findStudents(
    query: string,
    classID: number,
    gender: string,
    page: number,
    pageSize: number
  ) {
    const q = { query, class_id: classID, gender, page, page_size: pageSize };
    const url = this.http.buildurl('/students', q);
    return this.http.get(url);
  }

  createStudent(
    name: string,
    no: string,
    gender: string,
    birthday: any,
    remark: string,
    device: string,
    classID: number
  ) {
    const url = this.http.buildurl('/student');
    const body = { name, gender, remark, birthday, device, class_id: classID, no };
    return this.http.post(url, body);
  }

  updateStudent(
    id: number,
    name: string,
    no: string,
    gender: string,
    birthday: any,
    remark: string,
    device: string,
    classID: number
  ) {
    const url = this.http.buildurl('/student/' + id);
    const body = { name, gender, remark, device, birthday, class_id: classID, no };
    return this.http.put(url, body);
  }


  downloadLoadClassTemplate() {
    const url = this.http.buildurl('/class/load/template');
    return window.open(url, '_blank');
  }

  downloadLoadTeacherTemplate() {
    const url = this.http.buildurl('/teacher/load/template');
    return window.open(url, '_blank');
  }

  downloadLoadStudentTemplate() {
    const url = this.http.buildurl('/student/load/template');
    return window.open(url, '_blank');
  }

  loadClass(file: any) {
    const url = this.http.buildurl('/class/load');
    const body = new FormData();
    body.append('file', file);
    return this.http.post(url, body);
  }

  createClassLoad(classes: any[]) {
    const url = this.http.buildurl('/classes');
    const body = { classes };
    return this.http.post(url, body);
  }

  loadTeacher(file: any) {
    const url = this.http.buildurl('/teacher/load');
    const body = new FormData();
    body.append('file', file);
    return this.http.post(url, body);
  }

  loadStudent(file: any) {
    const url = this.http.buildurl('/student/load');
    const body = new FormData();
    body.append('file', file);
    return this.http.post(url, body);
  }

  createTeacherLoad(teachers: any[]) {
    const url = this.http.buildurl('/teachers');
    const body = { teachers };
    return this.http.post(url, body);
  }

  createStudentLoad(students: any[]) {
    const url = this.http.buildurl('/students');
    const body = { students };
    return this.http.post(url, body);
  }

  deleteStudent(id: number) {
    const url = this.http.buildurl('/student/' + id);
    return this.http.delete(url);
  }

  deleteTeacher(id: number) {
    const url = this.http.buildurl('/teacher/' + id);
    return this.http.delete(url);
  }

  deleteClass(id: number, withStudent: boolean, withTeacher: boolean) {
    const url = this.http.buildurl('/class/' + id, {
      with_student: withStudent,
      with_teacher: withTeacher,
    });
    return this.http.delete(url);
  }
}
