import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from '../base/base.module';
import { ClassModalComponent } from './components/class-modal/class-modal.component';
import { ClassSelectComponent } from './components/class-select/class-select.component';
import { DeleteClassModalComponent } from './components/delete-class-modal/delete-class-modal.component';
import { LoadClassModalComponent } from './components/load-class-modal/load-class-modal.component';
import { LoadStudentModalComponent } from './components/load-student-modal/load-student-modal.component';
import { LoadTeacherModalComponent } from './components/load-teacher-modal/load-teacher-modal.component';
import { NewClassModalComponent } from './components/new-class-modal/new-class-modal.component';
import { NewStudentModalComponent } from './components/new-student-modal/new-student-modal.component';
import { NewTeacherModalComponent } from './components/new-teacher-modal/new-teacher-modal.component';
import { SelfClassSelectComponent } from './components/self-class-select/self-class-select.component';
import { StudentAgeComponent } from './components/student-age/student-age.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { TeacherRoleLabelComponent } from './components/teacher-role-label/teacher-role-label.component';
import { UpdateStudentModalComponent } from './components/update-student-modal/update-student-modal.component';
import { UpdateTeacherModalComponent } from './components/update-teacher-modal/update-teacher-modal.component';
import { StudentMedicalExaminationVisionTabComponent } from './components/student-medical-examination-vision-tab/student-medical-examination-vision-tab.component';
import { StudentMorningCheckVisionTabComponent } from './components/student-morning-check-vision-tab/student-morning-check-vision-tab.component';
import { StudentHealthLineComponent } from './components/student-health-line/student-health-line.component';
import { StudentMedicalExaminationListComponent } from './components/student-medical-examination-list/student-medical-examination-list.component';
import { StudentMorningCheckListComponent } from './components/student-morning-check-list/student-morning-check-list.component';
import { ClassListPageComponent } from './pages/class-list-page/class-list-page.component';
import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { TeacherListPageComponent } from './pages/teacher-list-page/teacher-list-page.component';
import { RoutingModule } from './routing.module';
import { UpdateClassModalComponent } from './components/update-class-modal/update-class-modal.component';
import { StudentFitnessTestListComponent } from './components/student-fitness-test-list/student-fitness-test-list.component';



@NgModule({
  declarations: [
    ClassModalComponent,
    ClassSelectComponent,
    DeleteClassModalComponent,
    LoadClassModalComponent,
    LoadStudentModalComponent,
    LoadTeacherModalComponent,
    NewClassModalComponent,
    NewStudentModalComponent,
    NewTeacherModalComponent,
    SelfClassSelectComponent,
    StudentAgeComponent,
    StudentListComponent,
    StudentModalComponent,
    TeacherListComponent,
    TeacherRoleLabelComponent,
    UpdateStudentModalComponent,
    UpdateTeacherModalComponent,
    StudentMedicalExaminationVisionTabComponent,
    StudentMorningCheckVisionTabComponent,
    StudentHealthLineComponent,
    StudentMedicalExaminationListComponent,
    StudentMorningCheckListComponent,
    ClassListPageComponent,
    StudentListPageComponent,
    TeacherListPageComponent,
    UpdateClassModalComponent,
    StudentFitnessTestListComponent,
  ],
  imports: [
    CommonModule,
    BaseModule,
    RoutingModule,
  ],
  exports: [
    ClassModalComponent,
    ClassSelectComponent,
    DeleteClassModalComponent,
    LoadClassModalComponent,
    LoadStudentModalComponent,
    LoadTeacherModalComponent,
    NewClassModalComponent,
    NewStudentModalComponent,
    NewTeacherModalComponent,
    SelfClassSelectComponent,
    StudentAgeComponent,
    StudentListComponent,
    StudentModalComponent,
    TeacherListComponent,
    TeacherRoleLabelComponent,
    UpdateStudentModalComponent,
    UpdateTeacherModalComponent,
    StudentMedicalExaminationVisionTabComponent,
    StudentMorningCheckVisionTabComponent,
    StudentHealthLineComponent,
    StudentMedicalExaminationListComponent,
    StudentMorningCheckListComponent,
    UpdateClassModalComponent,
  ]
})
export class KindergartenModule { }
