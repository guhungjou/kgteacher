import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestDateSelectComponent } from './student-fitness-test-date-select.component';

describe('StudentFitnessTestDateSelectComponent', () => {
  let component: StudentFitnessTestDateSelectComponent;
  let fixture: ComponentFixture<StudentFitnessTestDateSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestDateSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestDateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
