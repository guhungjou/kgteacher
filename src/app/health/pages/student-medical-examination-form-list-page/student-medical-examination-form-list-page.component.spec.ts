import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationFormListPageComponent } from './student-medical-examination-form-list-page.component';

describe('StudentMedicalExaminationFormListPageComponent', () => {
  let component: StudentMedicalExaminationFormListPageComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationFormListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMedicalExaminationFormListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMedicalExaminationFormListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
