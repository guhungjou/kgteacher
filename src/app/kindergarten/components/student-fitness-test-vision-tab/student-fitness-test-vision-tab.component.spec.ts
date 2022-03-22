import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFitnessTestVisionTabComponent } from './student-fitness-test-vision-tab.component';

describe('StudentFitnessTestVisionTabComponent', () => {
  let component: StudentFitnessTestVisionTabComponent;
  let fixture: ComponentFixture<StudentFitnessTestVisionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFitnessTestVisionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFitnessTestVisionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
