import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gender-select',
  templateUrl: './gender-select.component.html',
  styleUrls: ['./gender-select.component.scss']
})
export class GenderSelectComponent implements OnInit {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.value = this.value || '';
    this.valueChange.emit(this.value);
  }

}
