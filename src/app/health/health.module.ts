import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KindergartenModule } from '../kindergarten/kindergarten.module';
import { StudentMedicalExaminationDateSelectComponent } from './components/student-medical-examination-date-select/student-medical-examination-date-select.component';
import { StudentMedicalExaminationFormPageComponent } from './pages/student-medical-examination-form-page/student-medical-examination-form-page.component';
import { StudentMedicalExaminationListPageComponent } from './pages/student-medical-examination-list-page/student-medical-examination-list-page.component';
import { StudentMedicalExaminationVisionPageComponent } from './pages/student-medical-examination-vision-page/student-medical-examination-vision-page.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { StudentMorningCheckVisionPageComponent } from './pages/student-morning-check-vision-page/student-morning-check-vision-page.component';
import { BaseModule } from '../base/base.module';
import { StudentFitnessTestListPageComponent } from './pages/student-fitness-test-list-page/student-fitness-test-list-page.component';
import { StudentFitnessTestVisionPageComponent } from './pages/student-fitness-test-vision-page/student-fitness-test-vision-page.component';
import { StudentFitnessTestDateSelectComponent } from './components/student-fitness-test-date-select/student-fitness-test-date-select.component';
import { BatchNewStudentMedicalExaminationModalComponent } from './components/batch-new-student-medical-examination-modal/batch-new-student-medical-examination-modal.component';



@NgModule({
  declarations: [
    StudentMedicalExaminationDateSelectComponent,
    StudentMedicalExaminationFormPageComponent,
    StudentMedicalExaminationListPageComponent,
    StudentMedicalExaminationVisionPageComponent,
    StudentMorningCheckListPageComponent,
    StudentMorningCheckVisionPageComponent,
    StudentFitnessTestListPageComponent,
    StudentFitnessTestVisionPageComponent,
    StudentFitnessTestDateSelectComponent,
    BatchNewStudentMedicalExaminationModalComponent,
  ],
  imports: [
    CommonModule,
    BaseModule,
    KindergartenModule,
  ]
})
export class HealthModule { }
