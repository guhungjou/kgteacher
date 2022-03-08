import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationVisionPageComponent } from './student-medical-examination-vision-page.component';

describe('StudentMedicalExaminationVisionPageComponent', () => {
  let component: StudentMedicalExaminationVisionPageComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationVisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMedicalExaminationVisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMedicalExaminationVisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
