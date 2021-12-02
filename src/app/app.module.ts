import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzNotificationServiceModule } from 'ng-zorro-antd/notification';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons.module';
import { ApiInterceptor } from './services/api.interceptor';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SelfAvatarComponent } from './components/self-avatar/self-avatar.component';
import { SelfHeaderComponent } from './components/self-header/self-header.component';
import { ClassListPageComponent } from './pages/class-list-page/class-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { UpdateSelfModalComponent } from './components/update-self-modal/update-self-modal.component';
import { UpdateSelfPasswordModalComponent } from './components/update-self-password-modal/update-self-password-modal.component';
import { SearchButtonComponent } from './components/search-button/search-button.component';
import { InputComponent } from './components/input/input.component';
import { DatetimeLabelComponent } from './components/datetime-label/datetime-label.component';
import { NewClassModalComponent } from './components/new-class-modal/new-class-modal.component';
import { UpdateClassModalComponent } from './components/update-class-modal/update-class-modal.component';
import { TeacherListPageComponent } from './pages/teacher-list-page/teacher-list-page.component';
import { TeacherRoleLabelComponent } from './components/teacher-role-label/teacher-role-label.component';
import { GenderComponent } from './components/gender/gender.component';
import { ClassSelectComponent } from './components/class-select/class-select.component';
import { NewTeacherModalComponent } from './components/new-teacher-modal/new-teacher-modal.component';
import { UpdateTeacherModalComponent } from './components/update-teacher-modal/update-teacher-modal.component';
import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { GenderSelectComponent } from './components/gender-select/gender-select.component';
import { NewStudentModalComponent } from './components/new-student-modal/new-student-modal.component';
import { UpdateStudentModalComponent } from './components/update-student-modal/update-student-modal.component';
import { SelfClassSelectComponent } from './components/self-class-select/self-class-select.component';
import { ClassModalComponent } from './components/class-modal/class-modal.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { DateLabelComponent } from './components/date-label/date-label.component';
import { StudentModalComponent } from './components/student-modal/student-modal.component';
import { StudentMorningCheckListComponent } from './components/student-morning-check-list/student-morning-check-list.component';
import { StudentMedicalExaminationListPageComponent } from './pages/student-medical-examination-list-page/student-medical-examination-list-page.component';

registerLocaleData(zh);

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
    SearchButtonComponent,
    InputComponent,
    DatetimeLabelComponent,
    NewClassModalComponent,
    UpdateClassModalComponent,
    TeacherListPageComponent,
    TeacherRoleLabelComponent,
    GenderComponent,
    ClassSelectComponent,
    NewTeacherModalComponent,
    UpdateTeacherModalComponent,
    StudentListPageComponent,
    GenderSelectComponent,
    NewStudentModalComponent,
    UpdateStudentModalComponent,
    SelfClassSelectComponent,
    ClassModalComponent,
    TeacherListComponent,
    StudentListComponent,
    StudentMorningCheckListPageComponent,
    DateLabelComponent,
    StudentModalComponent,
    StudentMorningCheckListComponent,
    StudentMedicalExaminationListPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,

    NzFormModule,
    NzPaginationModule,
    NzBreadCrumbModule,
    NzDatePickerModule,
    NzStatisticModule,
    NzDescriptionsModule,
    NzLayoutModule,
    NzMessageModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzButtonModule,
    NzTabsModule,
    NzTableModule,
    NzMenuModule,
    NzSelectModule,
    NzInputModule,
    NzInputNumberModule,
    NzDropDownModule,
    NzAvatarModule,
    NzModalModule,
    NzToolTipModule,
    NzBadgeModule,
    NzPopoverModule,
    NzIconModule,
    NzDividerModule,
    NzSpinModule,
    NzCheckboxModule,
    NzTreeModule,
    NzTreeSelectModule,
    NzListModule,
    NzSwitchModule,
    NzCollapseModule,
    NzUploadModule,
    NzTagModule,
    NzAutocompleteModule,
    NzTimelineModule,
    NzRadioModule,
    NzNotificationServiceModule,
    NzCardModule,
    NzEmptyModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
