import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestModalComponent } from './student-fitness-test-modal.component';

describe('StudentFitnessTestModalComponent', () => {
  let component: StudentFitnessTestModalComponent;
  let fixture: ComponentFixture<StudentFitnessTestModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
