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
    classID: number,
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

  updateTeacher(id: number, name: string, gender: string, phone: string, classID: number) {
    const url = this.buildurl('/teacher/' + id);
    const body = { name, phone, gender, class_id: classID };
    return this.put(url, body);
  }

  getClass(id: number) {
    const url = this.buildurl('/class/' + id);
    return this.fget(url);
  }
}
