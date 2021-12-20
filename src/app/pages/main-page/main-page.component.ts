import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isCollapsed = false;
  self: any = {};
  loading = false;

  constructor(
    private api: ApiService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.reset();
    this.getSelf();
  }

  async getSelf() {
    try {
      this.loading = true;
      const r = await this.api.getSelf();
      this.self = r.data;
    } catch (error) { } finally {
      this.loading = false;
    }
  }

  clickLogo() {
    this.router.navigateByUrl('/');
  }
}
