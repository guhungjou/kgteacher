import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestListComponent } from './student-fitness-test-list.component';

describe('StudentFitnessTestListComponent', () => {
  let component: StudentFitnessTestListComponent;
  let fixture: ComponentFixture<StudentFitnessTestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
