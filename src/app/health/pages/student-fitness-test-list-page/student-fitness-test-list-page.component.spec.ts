import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestListPageComponent } from './student-fitness-test-list-page.component';

describe('StudentFitnessTestListPageComponent', () => {
  let component: StudentFitnessTestListPageComponent;
  let fixture: ComponentFixture<StudentFitnessTestListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
