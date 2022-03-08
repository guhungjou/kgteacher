import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationListComponent } from './student-medical-examination-list.component';

describe('StudentMedicalExaminationListComponent', () => {
  let component: StudentMedicalExaminationListComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMedicalExaminationListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMedicalExaminationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
