import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-self-avatar',
  templateUrl: './self-avatar.component.html',
  styleUrls: ['./self-avatar.component.scss']
})
export class SelfAvatarComponent implements OnInit {

  constructor(private api: ApiService, private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.getSelf();
  }

  self: any = {};
  async getSelf() {
    try {
      const r = await this.api.getSelf();
      this.self = r.data;
    } catch (error) {

    }
  }

  async logout() {
    try {
      const r = await this.api.logout();
      if (r.status !== 0) {
        this.message.warning('位置错误');
      } else {
        this.message.success('注销成功');
        this.router.navigateByUrl('/login');
      }
    } catch (error) {
      this.message.success('网络错误');
    }
  }
}
