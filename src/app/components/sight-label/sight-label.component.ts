import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-sight-label',
  templateUrl: './sight-label.component.html',
  styleUrls: ['./sight-label.component.scss'],
})
export class SightLabelComponent implements OnInit, OnChanges {
  @Input() left = 0;
  @Input() right = 0;
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
