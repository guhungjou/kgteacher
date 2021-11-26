import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-role-label',
  templateUrl: './teacher-role-label.component.html',
  styleUrls: ['./teacher-role-label.component.scss'],
})
export class TeacherRoleLabelComponent implements OnInit {
  @Input() role = '';

  constructor() {}

  ngOnInit(): void {}
}
