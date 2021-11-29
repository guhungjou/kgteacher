import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListPageComponent } from './pages/class-list-page/class-list-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { TeacherListPageComponent } from './pages/teacher-list-page/teacher-list-page.component';

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
        path: 'classes',
        component: ClassListPageComponent,
      },
      {
        path: 'teachers',
        component: TeacherListPageComponent,
      },
      {
        path: 'students',
        component: StudentListPageComponent,
      }, {
        path: 'student/morning/checks',
        component: StudentMorningCheckListPageComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
