import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestTotalStatusComponent } from './student-fitness-test-total-status.component';

describe('StudentFitnessTestTotalStatusComponent', () => {
  let component: StudentFitnessTestTotalStatusComponent;
  let fixture: ComponentFixture<StudentFitnessTestTotalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestTotalStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestTotalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
