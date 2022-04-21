import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-student-age',
  templateUrl: './student-age.component.html',
  styleUrls: ['./student-age.component.scss']
})
export class StudentAgeComponent implements OnInit, OnChanges {

  @Input() birthday = '';
  dt: Date | null = null;
  years = 0;
  months = 0;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dt = new Date(this.birthday);
    if (this.dt) {
      // const m = moment(this.dt);
      // const now = moment();
      // this.years = now.diff(m, 'years');
      // this.months = now.diff(m, 'months') % 12;
      const now = new Date();
      let year = now.getFullYear() - this.dt.getFullYear();
      let month = now.getMonth() - this.dt.getMonth();
      let day = now.getDate() - this.dt.getDate();
      month = year * 12 + month;
      if (day >= 15) {
        month += 1;
      } else if (day < -15) {
        month -= 1;
      }
      this.years = Math.floor(month / 12);
      this.months = month % 12;
    }
  }

}
