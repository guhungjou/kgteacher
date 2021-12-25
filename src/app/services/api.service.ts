import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  buildurl(path: string, queryMap: any = null) {
    let query = '';
    if (queryMap) {
      const queries = [];
      for (const k of Object.keys(queryMap)) {
        const v = queryMap[k];
        if (v instanceof Array) {
          for (const vv of v) {
            queries.push(k + '=' + encodeURIComponent(vv));
          }
        } else {
          queries.push(k + '=' + encodeURIComponent(queryMap[k]));
        }
      }
      query = '?' + queries.join('&');
    }
    return environment.apiHost + path + query;
  }

  put(url: string, body: any) {
    return lastValueFrom<any>(
      this.http.put(url, body, { withCredentials: true })
    );
  }

  post(url: string, body: any) {
    return lastValueFrom<any>(
      this.http.post(url, body, { withCredentials: true })
    );
  }

  get(url: string) {
    return lastValueFrom<any>(this.http.get(url, { withCredentials: true }));
  }

  delete(url: string) {
    return lastValueFrom<any>(this.http.delete(url, { withCredentials: true }));
  }

  fetchMap: any = {};
  reset() {
    this.fetchMap = {};
  }
  async fetch(name: string, func: () => Promise<any>) {
    try {
      let doing = this.fetchMap[name];
      if (!doing) {
        doing = func();
        this.fetchMap[name] = doing;
      }
      const r = await doing;
      return r;
    } catch (error) {
      throw error;
    } finally {
      delete this.fetchMap[name];
    }
  }

  async fget(url: string) {
    return this.fetch(url, () => this.get(url));
  }

  getSelf() {
    const url = this.buildurl('/self');
    return this.fget(url);
  }

  login(username: string, password: string) {
    const url = this.buildurl('/login');
    const body = { username, password };
    return this.put(url, body);
  }

  logout() {
    const url = this.buildurl('/logout');
    return this.put(url, null);
  }

  updateSelf(name: string, phone: string, gender: string) {
    const url = this.buildurl('/self');
    const body = { name, phone, gender };
    return this.put(url, body);
  }

  updateSelfPassword(old: string, n: string) {
    const url = this.buildurl('/password');
    const body = { old, new: n };
    return this.put(url, body);
  }

  findClasses(query: string, page: number, pageSize: number) {
    const q = { query, page, page_size: pageSize };
    const url = this.buildurl('/classes', q);
    return this.get(url);
  }

  findSelfClasses(query: string, page: number, pageSize: number) {
    const q = { query, page, page_size: pageSize };
    const url = this.buildurl('/self/classes', q);
    return this.get(url);
  }

  createClass(name: string, remark: string) {
    const url = this.buildurl('/class');
    const body = { name, remark };
    return this.post(url, body);
  }

  updateClass(id: number, name: string, remark: string) {
    const url = this.buildurl('/class/' + id);
    const body = { name, remark };
    return this.put(url, body);
  }

  findTeachers(query: string, classID: number, page: number, pageSize: number) {
    const q = {
      query,
      class_id: classID,
      page,
      page_size: pageSize,
    };
    const url = this.buildurl('/teachers', q);
    return this.get(url);
  }

  createTeacher(
    username: string,
    password: string,
    name: string,
    gender: string,
    phone: string,
    classID: number
  ) {
    const url = this.buildurl('/teacher');
    const body = {
      username,
      password,
      name,
      gender,
      phone,
      class_id: classID,
    };
    return this.post(url, body);
  }

  updateTeacher(
    id: number,
    name: string,
    gender: string,
    phone: string,
    classID: number
  ) {
    const url = this.buildurl('/teacher/' + id);
    const body = { name, phone, gender, class_id: classID };
    return this.put(url, body);
  }

  getClass(id: number) {
    const url = this.buildurl('/class/' + id);
    return this.fget(url);
  }

  findStudents(
    query: string,
    classID: number,
    gender: string,
    page: number,
    pageSize: number
  ) {
    const q = { query, class_id: classID, gender, page, page_size: pageSize };
    const url = this.buildurl('/students', q);
    return this.get(url);
  }

  createStudent(
    name: string,
    gender: string,
    birthday: any,
    remark: string,
    device: string,
    classID: number
  ) {
    const url = this.buildurl('/student');
    const body = { name, gender, remark, birthday, device, class_id: classID };
    return this.post(url, body);
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
    const url = this.buildurl('/student/' + id);
    const body = { name, gender, remark, device, birthday, class_id: classID };
    return this.put(url, body);
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
    const url = this.buildurl('/student/morning/checks', q);
    return this.get(url);
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
    const url = this.buildurl('/student/morning/checks/export', q);
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
    const url = this.buildurl('/student/medical/examinations', q);
    return this.get(url);
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
    const url = this.buildurl('/student/medical/examinations/export', q);
    return window.open(url, '_blank');
  }

  downloadLoadClassTemplate() {
    const url = this.buildurl('/class/load/template');
    return window.open(url, '_blank');
  }

  downloadLoadTeacherTemplate() {
    const url = this.buildurl('/teacher/load/template');
    return window.open(url, '_blank');
  }

  downloadLoadStudentTemplate() {
    const url = this.buildurl('/student/load/template');
    return window.open(url, '_blank');
  }

  loadClass(file: any) {
    const url = this.buildurl('/class/load');
    const body = new FormData();
    body.append('file', file);
    return this.post(url, body);
  }

  createClassLoad(classes: any[]) {
    const url = this.buildurl('/classes');
    const body = { classes };
    return this.post(url, body);
  }

  loadTeacher(file: any) {
    const url = this.buildurl('/teacher/load');
    const body = new FormData();
    body.append('file', file);
    return this.post(url, body);
  }

  loadStudent(file: any) {
    const url = this.buildurl('/student/load');
    const body = new FormData();
    body.append('file', file);
    return this.post(url, body);
  }

  createTeacherLoad(teachers: any[]) {
    const url = this.buildurl('/teachers');
    const body = { teachers };
    return this.post(url, body);
  }

  createStudentLoad(students: any[]) {
    const url = this.buildurl('/students');
    const body = { students };
    return this.post(url, body);
  }

  deleteStudent(id: number) {
    const url = this.buildurl('/student/' + id);
    return this.delete(url);
  }

  deleteTeacher(id: number) {
    const url = this.buildurl('/teacher/' + id);
    return this.delete(url);
  }

  deleteClass(id: number, withStudent: boolean, withTeacher: boolean) {
    const url = this.buildurl('/class/' + id, {
      with_student: withStudent,
      with_teacher: withTeacher,
    });
    return this.delete(url);
  }

  getStudentMedicalExamination(id: number) {
    const url = this.buildurl('/student/medical/examination/' + id);
    return this.get(url);
  }

  findStudentMorningCheckTemperatureVision(date: any, classID: number) {
    const url = this.buildurl('/student/morning/check/temperature/vision', { date, class_id: classID });
    return this.fget(url);
  }

  findStudentMedicalExaminationHeightVision(date: any, classID: number) {
    const url = this.buildurl('/student/medical/examination/height/vision', { date, class_id: classID });
    return this.fget(url);
  }
  findStudentMedicalExaminationDates() {
    const url = this.buildurl('/student/medical/examination/dates');
    return this.fget(url);
  }

  findStudentMedicalExaminationWeightVision(date: any, classID: number) {
    const url = this.buildurl('/student/medical/examination/weight/vision', { date, class_id: classID });
    return this.fget(url);
  }

  findStudentMedicalExaminationBMIVision(date: any, classID: number) {
    const url = this.buildurl('/student/medical/examination/bmi/vision', { date, class_id: classID });
    return this.fget(url);
  }

  findStudentMedicalExaminationHemoglobinVision(date: any, classID: number) {
    const url = this.buildurl('/student/medical/examination/hemoglobin/vision', { date, class_id: classID });
    return this.fget(url);
  }

  findStudentMedicalExaminationALTVision(date: any, classID: number) {
    const url = this.buildurl('/student/medical/examination/alt/vision', { date, class_id: classID });
    return this.fget(url);
  }

  findStudentMedicalExaminationSightVision(date: any, classID: number) {
    const url = this.buildurl('/student/medical/examination/sight/vision', { date, class_id: classID });
    return this.fget(url);
  }
}
