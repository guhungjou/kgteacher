import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.scss'],
})
export class SearchButtonComponent implements OnInit {
  @Input() loading = false;
  @Output() search = new EventEmitter<any>();
  @Output() export = new EventEmitter<any>();
  @Input() disabled = false;

  constructor() { }

  ngOnInit(): void { }

  click() {
    this.search.emit(null);
  }

  eclick() {
    if (this.export.observed) {
      this.export.emit(null);
    }
  }
}
