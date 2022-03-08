import { Observable, throwError } from 'rxjs';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private router: Router, private message: NzMessageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          let redirect = this.router.url;
          if (!redirect.startsWith('/login')) {
            this.router.navigateByUrl(
              '/login?redirect=' + encodeURIComponent(redirect)
            );
          }
          return new Observable<never>();
        } else if (err.status === 403) {
          this.message.error('您无权访问该接口');
          return throwError(403);
        } else {
          return throwError(err);
        }
      })
    );
  }
}
