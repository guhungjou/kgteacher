import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-label',
  templateUrl: './bmi-label.component.html',
  styleUrls: ['./bmi-label.component.scss']
})
export class BmiLabelComponent implements OnInit, OnChanges {
  @Input() bmi = 0;
  @Input() updatedAt = '';
  @Input() status = '';
  updated = false;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.updated = false;
    if (this.updatedAt) {
      const dt = new Date(this.updatedAt);
      this.updated = dt.getTime() > 0;
    }
  }

}
