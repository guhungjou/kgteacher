import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime-label',
  templateUrl: './datetime-label.component.html',
  styleUrls: ['./datetime-label.component.scss'],
})
export class DatetimeLabelComponent implements OnInit, OnChanges {
  @Input() text = '';
  dt: Date | null = null;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() {
    this.dt = new Date(this.text);
  }
}
