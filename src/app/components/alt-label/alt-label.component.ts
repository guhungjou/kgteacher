import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt-label',
  templateUrl: './alt-label.component.html',
  styleUrls: ['./alt-label.component.scss'],
})
export class AltLabelComponent implements OnInit, OnChanges {
  @Input() alt = 0;
  @Input() remark = '';
  @Input() updatedAt = '';
  @Input() status = '';
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
