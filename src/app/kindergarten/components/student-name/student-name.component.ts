import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-name',
  templateUrl: './student-name.component.html',
  styleUrls: ['./student-name.component.scss']
})
export class StudentNameComponent implements OnInit {

  @Input() name = '';
  @Input() no = '';

  constructor() { }

  ngOnInit(): void {
  }

}
