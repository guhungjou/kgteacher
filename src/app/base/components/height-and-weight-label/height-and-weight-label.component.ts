import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-height-and-weight-label',
  templateUrl: './height-and-weight-label.component.html',
  styleUrls: ['./height-and-weight-label.component.scss'],
})
export class HeightAndWeightLabelComponent implements OnInit, OnChanges {
  @Input() height = 0;
  @Input() weight = 0;
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
