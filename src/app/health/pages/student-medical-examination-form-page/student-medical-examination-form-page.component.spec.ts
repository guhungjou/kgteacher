import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationFormPageComponent } from './student-medical-examination-form-page.component';

describe('StudentMedicalExaminationFormPageComponent', () => {
  let component: StudentMedicalExaminationFormPageComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMedicalExaminationFormPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      StudentMedicalExaminationFormPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
