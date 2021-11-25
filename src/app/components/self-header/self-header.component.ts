import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-self-header',
  templateUrl: './self-header.component.html',
  styleUrls: ['./self-header.component.scss'],
})
export class SelfHeaderComponent implements OnInit {
  constructor(private api: ApiService) {}

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
}
