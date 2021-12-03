import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationListPageComponent } from './student-medical-examination-list-page.component';

describe('StudentMedicalExaminationListPageComponent', () => {
  let component: StudentMedicalExaminationListPageComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMedicalExaminationListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(
      StudentMedicalExaminationListPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
