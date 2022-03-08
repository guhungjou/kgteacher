import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelfAvatarComponent } from './components/self-avatar/self-avatar.component';
import { SelfHeaderComponent } from './components/self-header/self-header.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UpdateSelfModalComponent } from './components/update-self-modal/update-self-modal.component';
import { UpdateSelfPasswordModalComponent } from './components/update-self-password-modal/update-self-password-modal.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { StudentMedicalExaminationListPageComponent } from './pages/student-medical-examination-list-page/student-medical-examination-list-page.component';
import { StudentMedicalExaminationFormPageComponent } from './pages/student-medical-examination-form-page/student-medical-examination-form-page.component';
import { StudentMorningCheckVisionPageComponent } from './pages/student-morning-check-vision-page/student-morning-check-vision-page.component';
import { StudentMedicalExaminationVisionPageComponent } from './pages/student-medical-examination-vision-page/student-medical-examination-vision-page.component';
import { StudentMedicalExaminationDateSelectComponent } from './components/student-medical-examination-date-select/student-medical-examination-date-select.component';
import { BaseModule } from './base/base.module';
import { AppRoutingModule } from './app-routing.module';
import { KindergartenModule } from './kindergarten/kindergarten.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    SelfAvatarComponent,
    SelfHeaderComponent,
    DashboardPageComponent,
    UpdateSelfModalComponent,
    UpdateSelfPasswordModalComponent,
    StudentMorningCheckListPageComponent,
    StudentMedicalExaminationListPageComponent,
    StudentMedicalExaminationFormPageComponent,
    StudentMorningCheckVisionPageComponent,
    StudentMedicalExaminationVisionPageComponent,
    StudentMedicalExaminationDateSelectComponent,
  ],
  imports: [
    BaseModule,
    AppRoutingModule,
    KindergartenModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
