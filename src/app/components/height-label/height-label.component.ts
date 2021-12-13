import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-height-label',
  templateUrl: './height-label.component.html',
  styleUrls: ['./height-label.component.scss'],
})
export class HeightLabelComponent implements OnInit, OnChanges {
  @Input() height = 0;
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
