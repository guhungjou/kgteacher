import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-label',
  templateUrl: './score-label.component.html',
  styleUrls: ['./score-label.component.scss']
})
export class ScoreLabelComponent implements OnInit, OnChanges {
  @Input() value = 0;
  @Input() score = 0;
  @Input() updatedAt = '';

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
