import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import screenfull from 'screenfull';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  self: any = {};
  constructor(private api: ApiService, private title: Title) {
    this.title.setTitle('童角健康站 - 总览');
  }

  ngOnInit(): void {
    this.getSelf();
  }

  @ViewChild('content') content!: ElementRef;

  async getSelf() {
    try {
      const r = await this.api.getSelf();
      this.self = r.data;
    } catch (error) { }
  }

  isFullscreen() {
    return screenfull.isFullscreen;
  }

  fullscreen() {
    screenfull.toggle(this.content.nativeElement);
    // screenfull.request(this.content.nativeElement);
  }
}
