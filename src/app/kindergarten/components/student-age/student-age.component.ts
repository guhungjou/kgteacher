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
      const m = moment(this.dt);
      const now = moment();
      this.years = now.diff(m, 'years');
      this.months = now.diff(m, 'months') % 12;
    }
  }

}
