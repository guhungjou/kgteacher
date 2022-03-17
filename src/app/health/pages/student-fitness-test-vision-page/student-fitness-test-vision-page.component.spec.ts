import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestVisionPageComponent } from './student-fitness-test-vision-page.component';

describe('StudentFitnessTestVisionPageComponent', () => {
  let component: StudentFitnessTestVisionPageComponent;
  let fixture: ComponentFixture<StudentFitnessTestVisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestVisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestVisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
