import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HealthApiService } from 'src/app/health/health-api.service';
import { KindergartenApiService } from 'src/app/kindergarten/kindergarten-api.service';
import { ApiService } from 'src/app/services/api.service';
import { getToday } from 'src/app/x/datetime';
import { addDays } from 'date-fns';

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
  date: any = getToday();
  constructor(private api: ApiService, private title: Title,
    private healthApi: HealthApiService, private kindergartenApi: KindergartenApiService) {
    this.title.setTitle('童角健康站 - 总览');
  }

  ngOnInit(): void {
    this.getSelf();
    this.getKindergartenStudentMorningCheckStat();
    this.findClasses();
    this.findStudentMorningCheckTemperatureVisionAll();
  }

  onDateChange() {
    if (!this.date) {
      return;
    }
    this.getKindergartenStudentMorningCheckStat();
    if (this.class) {
      this.getKindergartenStudentMorningCheckStatClass(this.class.id);
      this.findStudentMorningCheckTemperatureVision(this.class.id);
    }
  }

  async getSelf() {
    try {
      const r = await this.api.getSelf();
      this.self = r.data;
    } catch (error) { }
  }

  async getKindergartenStudentMorningCheckStat() {
    try {
      const r = await this.healthApi.getKindergartenStudentMorningCheckStat(this.date.toISOString());
      this.checkStat = r.data;
    } catch (error) {

    }
  }

  async getKindergartenStudentMorningCheckStatClass(classID: number) {
    try {
      const today = this.date;
      const r = await this.healthApi.getKindergartenStudentMorningCheckStat(today.toISOString(), classID);
      if (this.class) {
        this.class.cstat = r.data;
      }
    } catch (error) {

    }
  }

  onClassChange(id: number) {
    for (const c of this.classes) {
      if (c.id === id) {
        this.class = c;
        this.getKindergartenStudentMorningCheckStatClass(this.class.id);
        this.findStudentMorningCheckTemperatureVision(this.class.id);
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
        this.findStudentMorningCheckTemperatureVision(this.class.id);

      }
    } catch (error) {

    }
  }

  tempeatureData: any = [];
  allTempeatureData: any = [];
  async findStudentMorningCheckTemperatureVisionAll() {
    if (!this.date) {
      return;
    }
    try {
      const r = await this.healthApi.findStudentMorningCheckTemperatureVision(this.date.toISOString(), 0);
      const data = r.data;
      if (data.length === 0) {
        this.allTempeatureData = [];
      } else {
        this.allTempeatureData = data;
      }
      for (const d of this.allTempeatureData) {
        if (d.status === 'high') {
          d.name = '偏高';
        } else if (d.status === 'low') {
          d.name = '偏低'
        } else {
          d.name = '正常'
        }
      }
    } catch (error) {
      // this.message.error('网络错误');
    } finally {
    }
  }
  async findStudentMorningCheckTemperatureVision(classID: number) {
    if (!this.date) {
      return;
    }
    try {
      const r = await this.healthApi.findStudentMorningCheckTemperatureVision(this.date.toISOString(), classID);
      const data = r.data;
      if (data.length === 0) {
        this.tempeatureData = [];
      } else {
        this.tempeatureData = data;
      }
      for (const d of this.tempeatureData) {
        if (d.status === 'high') {
          d.name = '偏高';
        } else if (d.status === 'low') {
          d.name = '偏低'
        } else {
          d.name = '正常'
        }
      }
    } catch (error) {
      // this.message.error('网络错误');
    } finally {
    }
  }
}
