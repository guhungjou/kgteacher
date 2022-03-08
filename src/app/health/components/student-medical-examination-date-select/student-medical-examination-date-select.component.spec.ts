import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationDateSelectComponent } from './student-medical-examination-date-select.component';

describe('StudentMedicalExaminationDateSelectComponent', () => {
  let component: StudentMedicalExaminationDateSelectComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationDateSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMedicalExaminationDateSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMedicalExaminationDateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
