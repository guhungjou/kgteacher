import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchNewStudentMedicalExaminationModalComponent } from './batch-new-student-medical-examination-modal.component';

describe('BatchNewStudentMedicalExaminationModalComponent', () => {
  let component: BatchNewStudentMedicalExaminationModalComponent;
  let fixture: ComponentFixture<BatchNewStudentMedicalExaminationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchNewStudentMedicalExaminationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchNewStudentMedicalExaminationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
