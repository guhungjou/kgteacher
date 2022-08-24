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
    this.getSelf().then(() => {
      this.getKindergartenStudentMorningCheckStat();
      this.findClasses();
      this.findStudentMorningCheckTemperatureVisionAll();
    });
  }

  onDateChange() {
    if (!this.date) {
      return;
    }
    this.getKindergartenStudentMorningCheckStat();
    if (this.class) {
      this.getKindergartenStudentMorningCheckStatClass(this.class.id);
      this.findStudentMorningCheckTemperatureVision(this.class.id);
      this.findStudentMorningCheckTemperatureVisionAll();
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
      this.classes = this.classes.reverse();
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
      this.allTempeatureData = [];
      let x = 0;
      let n = 0;
      for (const d of data) {
        if (d.status !== 'normal') {
          x += d.count;
        } else {
          n += d.count;
        }
      }
      this.allTempeatureData.push({ name: '异常', count: x });
      this.allTempeatureData.push({ name: '正常', count: n });
      if (x + n < this.self?.kindergarten?.number_of_student) {
        this.allTempeatureData.push({ name: '未检', count: this.self?.kindergarten?.number_of_student - (x + n) });
      }

      // if (data.length === 0) {
      //   this.allTempeatureData = [];
      // } else {
      //   this.allTempeatureData = data;
      // }
      // let h = false;
      // let n = false;
      // let total = 0;
      // for (const d of this.allTempeatureData) {
      //   if (d.status === 'high' || d.status === 'low') {
      //     d.name = '异常';
      //     h = true;
      //   } else {
      //     d.name = '正常'
      //     n = true;
      //   }
      //   total += d.count;
      // }
      // if (!h) {
      //   this.allTempeatureData.push({ name: '异常', count: 0 });
      // }
      // if (!n) {
      //   this.allTempeatureData.push({ name: '正常', count: 0 });
      // }
      // if (total < this.self?.kindergarten?.number_of_student) {
      //   this.allTempeatureData.push({ name: '未检', count: this.self?.kindergarten?.number_of_student - total });
      // }
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
      this.tempeatureData = [];
      let x = 0;
      let n = 0;
      for (const d of data) {
        if (d.status !== 'normal') {
          x += d.count;
        } else {
          n += d.count;
        }
      }
      if (x > 0) {
        this.tempeatureData.push({ name: '异常', count: x });
      }
      if (n > 0) {
        this.tempeatureData.push({ name: '正常', count: n });
      }
      if (x + n < this.class?.number_of_student) {
        this.tempeatureData.push({ name: '未检', count: this.class?.number_of_student - (x + n) });
      }
      // if (data.length === 0) {
      //   this.tempeatureData = [];
      // } else {
      //   this.tempeatureData = data;
      // }
      // let total = 0;
      // for (const d of this.tempeatureData) {
      //   if (d.status === 'high' || d.status === 'low') {
      //     d.name = '异常';
      //   } else {
      //     d.name = '正常'
      //   }
      //   total += d.count;
      // }
      // for (const c of this.classes) {
      //   if (c.id === classID) {
      //     if (total < c.number_of_student) {
      //       this.tempeatureData.push({ name: '未检', count: c.number_of_student - total });
      //     }
      //     break;
      //   }
      // }
    } catch (error) {
      // this.message.error('网络错误');
    } finally {
    }
  }
}
