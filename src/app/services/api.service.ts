import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

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
}
