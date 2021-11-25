import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private message: NzMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  formGroup!: FormGroup;
  loading = false;

  submit() {
    for (const i of Object.keys(this.formGroup.controls)) {
      this.formGroup.controls[i].markAsDirty();
      this.formGroup.controls[i].updateValueAndValidity();
    }
    for (const i of Object.keys(this.formGroup.controls)) {
      if (!this.formGroup.controls[i].valid) {
        return;
      }
    }

    const value = this.formGroup.value;
    const username = value.username;
    const password = value.password;
    if (!username || !password) {
      return;
    }
    this.login(username, password);
  }

  async login(username: string, password: string) {
    try {
      this.loading = true;
      const r = await this.api.login(username, password);
      if (r.status === 20001) {
        this.message.warning('用户不存在');
      } else if (r.status === 20002) {
        this.message.warning('密码错误');
      } else if (r.status !== 0) {
        this.message.warning('未知错误');
      } else {
        let redirect = this.route.snapshot.queryParamMap.get('redirect');
        if (!redirect) {
          redirect = '/';
        }
        this.router.navigateByUrl(redirect);
      }
    } catch (error) {
      this.message.error('网络错误');
    } finally {
      this.loading = false;
    }
  }
}
