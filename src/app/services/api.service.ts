import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../base/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpService) { }

  getSelf() {
    const url = this.http.buildurl('/self');
    return this.http.fget(url);
  }

  login(username: string, password: string) {
    const url = this.http.buildurl('/login');
    const body = { username, password };
    return this.http.put(url, body);
  }

  logout() {
    const url = this.http.buildurl('/logout');
    return this.http.put(url, null);
  }

  updateSelf(name: string, phone: string, gender: string) {
    const url = this.http.buildurl('/self');
    const body = { name, phone, gender };
    return this.http.put(url, body);
  }

  updateSelfPassword(old: string, n: string) {
    const url = this.http.buildurl('/password');
    const body = { old, new: n };
    return this.http.put(url, body);
  }

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
    gender: string,
    birthday: any,
    remark: string,
    device: string,
    classID: number
  ) {
    const url = this.http.buildurl('/student');
    const body = { name, gender, remark, birthday, device, class_id: classID };
    return this.http.post(url, body);
  }

  updateStudent(
    id: number,
    name: string,
    gender: string,
    birthday: any,
    remark: string,
    device: string,
    classID: number
  ) {
    const url = this.http.buildurl('/student/' + id);
    const body = { name, gender, remark, device, birthday, class_id: classID };
    return this.http.put(url, body);
  }

  findStudentMorningChecks(
    query: string,
    classID: number,
    studentID: number,
    temperatureFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      temperature_filters: temperatureFilters,
      page,
      page_size: pageSize,
      student_id: studentID,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/morning/checks', q);
    return this.http.get(url);
  }

  exportStudentMorningChecks(
    query: string,
    classID: number,
    studentID: number,
    temperatureFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      temperature_filters: temperatureFilters,
      page,
      page_size: pageSize,
      student_id: studentID,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/morning/checks/export', q);
    return window.open(url, '_blank');
  }

  findStudentMedicalExaminations(
    query: string,
    classID: number,
    studentID: number,
    heightFilters: string[],
    weightFilters: string[],
    hemoglobinFilters: string[],
    sightFilters: string[],
    altFilters: string[],
    bmiFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
      student_id: studentID,
      height_filters: heightFilters,
      weight_filters: weightFilters,
      hemoglobin_filters: hemoglobinFilters,
      sight_filters: sightFilters,
      alt_filters: altFilters,
      bmi_filters: bmiFilters,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/medical/examinations', q);
    return this.http.fget(url);
  }
  exportStudentMedicalExaminations(
    query: string,
    classID: number,
    studentID: number,
    heightFilters: string[],
    weightFilters: string[],
    hemoglobinFilters: string[],
    sightFilters: string[],
    altFilters: string[],
    bmiFilters: string[],
    startTime: any,
    endTime: any,
    page: number,
    pageSize: number
  ) {
    const q: any = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
      student_id: studentID,
      height_filters: heightFilters,
      weight_filters: weightFilters,
      hemoglobin_filters: hemoglobinFilters,
      sight_filters: sightFilters,
      alt_filters: altFilters,
      bmi_filters: bmiFilters,
    };
    if (startTime) {
      q['start_time'] = startTime;
    }
    if (endTime) {
      q['end_time'] = endTime;
    }
    const url = this.http.buildurl('/student/medical/examinations/export', q);
    return window.open(url, '_blank');
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

  getStudentMedicalExamination(id: number) {
    const url = this.http.buildurl('/student/medical/examination/' + id);
    return this.http.fget(url);
  }

  findStudentMorningCheckTemperatureVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/morning/check/temperature/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationHeightVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/height/vision', { date, class_id: classID });
    return this.http.fget(url);
  }
  findStudentMedicalExaminationDates() {
    const url = this.http.buildurl('/student/medical/examination/dates');
    return this.http.fget(url);
  }

  findStudentMedicalExaminationWeightVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/weight/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationBMIVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/bmi/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationHemoglobinVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/hemoglobin/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationALTVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/alt/vision', { date, class_id: classID });
    return this.http.fget(url);
  }

  findStudentMedicalExaminationSightVision(date: any, classID: number) {
    const url = this.http.buildurl('/student/medical/examination/sight/vision', { date, class_id: classID });
    return this.http.fget(url);
  }
}
