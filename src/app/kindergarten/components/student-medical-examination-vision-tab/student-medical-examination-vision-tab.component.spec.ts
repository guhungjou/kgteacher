import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMedicalExaminationVisionTabComponent } from './student-medical-examination-vision-tab.component';

describe('StudentMedicalExaminationVisionTabComponent', () => {
  let component: StudentMedicalExaminationVisionTabComponent;
  let fixture: ComponentFixture<StudentMedicalExaminationVisionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMedicalExaminationVisionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMedicalExaminationVisionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
