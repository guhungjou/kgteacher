import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label = '标签';
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() enter = new EventEmitter<any>();

  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void { }

  onChange() {
    this.value = this.value || '';
    this.valueChange.emit(this.value);
  }

  enter_() {
    this.enter.emit(null);
  }
}
