import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMedicalExaminationFormPageComponent } from './health/pages/student-medical-examination-form-page/student-medical-examination-form-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

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
        path: 'health',
        loadChildren: () => import('./health/routing.module').then(m => m.RoutingModule),
      },
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
