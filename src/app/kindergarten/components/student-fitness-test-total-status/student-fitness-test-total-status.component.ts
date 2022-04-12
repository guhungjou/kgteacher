import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-fitness-test-total-status',
  templateUrl: './student-fitness-test-total-status.component.html',
  styleUrls: ['./student-fitness-test-total-status.component.scss']
})
export class StudentFitnessTestTotalStatusComponent implements OnInit {

  @Input() status = '';

  constructor() { }

  ngOnInit(): void {
  }

  text() {
    const m: any = {
      'excellent': '优秀',
      'good': '良好',
      'okay': '合格',
      'fail': '不合格'
    };
    return m[this.status] || '';
  }

  color() {
    const m: any = {
      'excellent': 'success',
      'good': 'processing',
      'okay': 'warning',
      'fail': 'error'
    };
    return m[this.status] || '';
  }
}
