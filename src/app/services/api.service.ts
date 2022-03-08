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
}
