import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  styleUrls: ['./student-modal.component.scss']
})
export class StudentModalComponent implements OnInit {

  @Input() isVisible = false;
  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Input() data: any = {};
  loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

}
