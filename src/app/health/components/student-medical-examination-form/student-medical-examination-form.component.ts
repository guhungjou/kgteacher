import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-medical-examination-form',
  templateUrl: './student-medical-examination-form.component.html',
  styleUrls: ['./student-medical-examination-form.component.scss'],
})
export class StudentMedicalExaminationFormComponent implements OnInit {
  @Input() data: any = null;

  constructor() {}

  ngOnInit(): void {}
}
