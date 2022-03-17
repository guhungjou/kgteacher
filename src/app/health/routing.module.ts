import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFitnessTestListPageComponent } from './pages/student-fitness-test-list-page/student-fitness-test-list-page.component';
import { StudentFitnessTestVisionPageComponent } from './pages/student-fitness-test-vision-page/student-fitness-test-vision-page.component';
import { StudentMedicalExaminationListPageComponent } from './pages/student-medical-examination-list-page/student-medical-examination-list-page.component';
import { StudentMedicalExaminationVisionPageComponent } from './pages/student-medical-examination-vision-page/student-medical-examination-vision-page.component';
import { StudentMorningCheckListPageComponent } from './pages/student-morning-check-list-page/student-morning-check-list-page.component';
import { StudentMorningCheckVisionPageComponent } from './pages/student-morning-check-vision-page/student-morning-check-vision-page.component';

const routes: Routes = [
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
    }, {
        path: 'student/fitness/tests',
        component: StudentFitnessTestListPageComponent,
    }, {
        path: 'student/fitness/test/vision',
        component: StudentFitnessTestVisionPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutingModule { }
