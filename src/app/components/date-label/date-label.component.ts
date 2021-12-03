import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-label',
  templateUrl: './date-label.component.html',
  styleUrls: ['./date-label.component.scss'],
})
export class DateLabelComponent implements OnInit, OnChanges {
  @Input() text = '';
  dt: Date | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.dt = new Date(this.text);
  }
}
