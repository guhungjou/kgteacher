import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationFormComponent } from './student-medical-examination-form.component';

describe('StudentMedicalExaminationFormComponent', () => {
  let component: StudentMedicalExaminationFormComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMedicalExaminationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMedicalExaminationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
