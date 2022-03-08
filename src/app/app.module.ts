import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelfAvatarComponent } from './components/self-avatar/self-avatar.component';
import { SelfHeaderComponent } from './components/self-header/self-header.component';
import { ClassListPageComponent } from './pages/class-list-page/class-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UpdateSelfModalComponent } from './components/update-self-modal/update-self-modal.component';
import { UpdateSelfPasswordModalComponent } from './components/update-self-password-modal/update-self-password-modal.component';
import { NewClassModalComponent } from './components/new-class-modal/new-class-modal.component';
import { UpdateClassModalComponent } from './components/update-class-modal/update-class-modal.component';
import { TeacherListPageComponent } from './pages/teacher-list-page/teacher-list-page.component';
import { TeacherRoleLabelComponent } from './components/teacher-role-label/teacher-role-label.component';
import { ClassSelectComponent } from './components/class-select/class-select.component';
import { NewTeacherModalComponent } from './components/new-teacher-modal/new-teacher-modal.component';
import { UpdateTeacherModalComponent } from './components/update-teacher-modal/update-teacher-modal.component';
import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { NewStudentModalComponent } from './components/new-student-modal/new-student-modal.component';
import { UpdateStudentModalComponent } from './components/update-student-modal/update-student-modal.component';
import { SelfClassSelectComponent } from './components/self-class-select/self-class-select.component';
import { ClassModalComponent } from './components/class-modal/class-modal.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentMorningCheckListComponent } from './components/student-morning-check-list/student-morning-check-list.component';
import { StudentMedicalExaminationListPageComponent } from './pages/student-medical-examination-list-page/student-medical-examination-list-page.component';
import { StudentMedicalExaminationListComponent } from './components/student-medical-examination-list/student-medical-examination-list.component';
import { LoadClassModalComponent } from './components/load-class-modal/load-class-modal.component';
import { LoadTeacherModalComponent } from './components/load-teacher-modal/load-teacher-modal.component';
import { LoadStudentModalComponent } from './components/load-student-modal/load-student-modal.component';
import { DeleteClassModalComponent } from './components/delete-class-modal/delete-class-modal.component';
import { StudentMedicalExaminationFormPageComponent } from './pages/student-medical-examination-form-page/student-medical-examination-form-page.component';
import { StudentAgeComponent } from './components/student-age/student-age.component';
import { TemperatureLabelComponent } from './components/temperature-label/temperature-label.component';
import { StudentMorningCheckVisionPageComponent } from './pages/student-morning-check-vision-page/student-morning-check-vision-page.component';
import { StudentMedicalExaminationVisionPageComponent } from './pages/student-medical-examination-vision-page/student-medical-examination-vision-page.component';
import { StudentMedicalExaminationDateSelectComponent } from './components/student-medical-examination-date-select/student-medical-examination-date-select.component';
import { StudentMorningCheckVisionTabComponent } from './components/student-morning-check-vision-tab/student-morning-check-vision-tab.component';
import { StudentHealthLineComponent } from './components/student-health-line/student-health-line.component';
import { StudentMedicalExaminationVisionTabComponent } from './components/student-medical-examination-vision-tab/student-medical-examination-vision-tab.component';
import { BaseModule } from './base/base.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    SelfAvatarComponent,
    SelfHeaderComponent,
    ClassListPageComponent,
    DashboardPageComponent,
    UpdateSelfModalComponent,
    UpdateSelfPasswordModalComponent,
    NewClassModalComponent,
    UpdateClassModalComponent,
    TeacherListPageComponent,
    TeacherRoleLabelComponent,
    ClassSelectComponent,
    NewTeacherModalComponent,
    UpdateTeacherModalComponent,
    StudentListPageComponent,
    NewStudentModalComponent,
    UpdateStudentModalComponent,
    SelfClassSelectComponent,
    ClassModalComponent,
    TeacherListComponent,
    StudentListComponent,
    StudentMorningCheckListPageComponent,
    StudentModalComponent,
    StudentMorningCheckListComponent,
    StudentMedicalExaminationListPageComponent,
    StudentMedicalExaminationListComponent,
    LoadClassModalComponent,
    LoadTeacherModalComponent,
    LoadStudentModalComponent,
    DeleteClassModalComponent,
    StudentMedicalExaminationFormPageComponent,
    StudentAgeComponent,
    TemperatureLabelComponent,
    StudentMorningCheckVisionPageComponent,
    StudentMedicalExaminationVisionPageComponent,
    StudentMedicalExaminationDateSelectComponent,
    StudentMorningCheckVisionTabComponent,
    StudentHealthLineComponent,
    StudentMedicalExaminationVisionTabComponent,
  ],
  imports: [
    BaseModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
