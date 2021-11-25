import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-self-avatar',
  templateUrl: './self-avatar.component.html',
  styleUrls: ['./self-avatar.component.scss'],
})
export class SelfAvatarComponent implements OnInit {
  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private router: Router,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.getSelf();
  }

  self: any = {};
  async getSelf() {
    try {
      const r = await this.api.getSelf();
      this.self = r.data;
    } catch (error) {}
  }

  logout() {
    this.modal.confirm({
      nzTitle: '注销',
      nzContent: '是否确认注销当前登录',
      nzOnOk: () => this.logout_(),
    });
  }

  async logout_() {
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

  isUpdateSelfModalVisible = false;
  showUpdateSelfModal() {
    this.isUpdateSelfModalVisible = true;
  }

  isUpdateSelfPasswordModalVisible = false;
  showUpdateSelfPasswordModal() {
    this.isUpdateSelfPasswordModalVisible = true;
  }

  onUpdateSelf(data: any) {
    this.self = Object.assign(this.self, data);
  }
}
