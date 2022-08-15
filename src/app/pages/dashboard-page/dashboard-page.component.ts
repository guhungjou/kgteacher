import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HealthApiService } from 'src/app/health/health-api.service';
import { KindergartenApiService } from 'src/app/kindergarten/kindergarten-api.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  self: any = null;
  checkStat: any = null;
  classes: any[] = [];
  class: any = null;
  constructor(private api: ApiService, private title: Title,
    private healthApi: HealthApiService, private kindergartenApi: KindergartenApiService) {
    this.title.setTitle('童角健康站 - 总览');
  }

  ngOnInit(): void {
    this.getSelf();
    this.getKindergartenStudentMorningCheckStat();
    this.findClasses();
  }

  async getSelf() {
    try {
      const r = await this.api.getSelf();
      this.self = r.data;
    } catch (error) { }
  }

  async getKindergartenStudentMorningCheckStat() {
    try {
      const now = new Date();
      const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
      const r = await this.healthApi.getKindergartenStudentMorningCheckStat(new Date(today).toISOString());
      this.checkStat = r.data;
    } catch (error) {

    }
  }

  async getKindergartenStudentMorningCheckStatClass(classID: number) {
    try {
      const now = new Date();
      const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
      const r = await this.healthApi.getKindergartenStudentMorningCheckStat(new Date(today).toISOString(), classID);
      if (this.class) {
        this.class.cstat = r.data.count;
      }
    } catch (error) {

    }
  }

  onClassChange(id: number) {
    for (const c of this.classes) {
      if (c.id === id) {
        this.class = c;
        this.getKindergartenStudentMorningCheckStatClass(c.id);
        return;
      }
    }
    this.class = null;
  }

  async findClasses() {
    try {
      const r = await this.kindergartenApi.findClasses('', 1, 99);
      this.classes = r.data.list;
      if (this.classes.length > 0) {
        this.class = this.classes[0];
        this.getKindergartenStudentMorningCheckStatClass(this.class.id);
      }
    } catch (error) {

    }
  }
}
