import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { StudentMedicalExaminationFormPageComponent } from './pages/student-medical-examination-form-page/student-medical-examination-form-page.component';
import { StudentMedicalExaminationListPageComponent } from './pages/student-medical-examination-list-page/student-medical-examination-list-page.component';
import { StudentMedicalExaminationVisionPageComponent } from './pages/student-medical-examination-vision-page/student-medical-examination-vision-page.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { StudentMorningCheckVisionPageComponent } from './pages/student-morning-check-vision-page/student-morning-check-vision-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent,
      },
      {
        path: 'kindergarten',
        loadChildren: () => import('./kindergarten/routing.module').then(m => m.RoutingModule),
      },
      {
        path: 'student/morning/checks',
        component: StudentMorningCheckListPageComponent,
      },
      {
        path: 'student/morning/check/vision',
        component: StudentMorningCheckVisionPageComponent,
      },
      {
        path: 'student/medical/exams',
        component: StudentMedicalExaminationListPageComponent,
      },
      {
        path: 'student/medical/exam/vision',
        component: StudentMedicalExaminationVisionPageComponent,
      }
    ],
  },
  {
    path: 'student/medical/exam/form/:id',
    component: StudentMedicalExaminationFormPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
