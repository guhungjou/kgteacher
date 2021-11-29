import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-class-modal',
  templateUrl: './class-modal.component.html',
  styleUrls: ['./class-modal.component.scss'],
})
export class ClassModalComponent implements OnInit {
  @Input() data: any = {};

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }
}
