import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hemoglobin-label',
  templateUrl: './hemoglobin-label.component.html',
  styleUrls: ['./hemoglobin-label.component.scss'],
})
export class HemoglobinLabelComponent implements OnInit, OnChanges {
  @Input() hemoglobin = 0;
  @Input() remark = '';
  @Input() updatedAt = '';
  updated = false;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.updated = false;
    if (this.updatedAt) {
      const dt = new Date(this.updatedAt);
      this.updated = dt.getTime() > 0;
    }
  }
}
