import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooth-label',
  templateUrl: './tooth-label.component.html',
  styleUrls: ['./tooth-label.component.scss'],
})
export class ToothLabelComponent implements OnInit, OnChanges {
  @Input() tooth = 0;
  @Input() caries = 0;
  @Input() remark = '';
  @Input() updatedAt = '';
  updated = false;

  constructor() { }

  ngOnInit(): void { }
  ngOnChanges() {
    this.updated = false;
    if (this.updatedAt) {
      const dt = new Date(this.updatedAt);
      this.updated = dt.getTime() > 0;
    }
  }
}
