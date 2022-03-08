import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight-label',
  templateUrl: './weight-label.component.html',
  styleUrls: ['./weight-label.component.scss'],
})
export class WeightLabelComponent implements OnInit, OnChanges {
  @Input() weight = 0;
  @Input() status = '';
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
