import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListPageComponent } from './pages/class-list-page/class-list-page.component';
import { StudentListPageComponent } from './pages/student-list-page/student-list-page.component';
import { TeacherListPageComponent } from './pages/teacher-list-page/teacher-list-page.component';

const routes: Routes = [
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
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingModule { }
