import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAgeComponent } from './student-age.component';

describe('StudentAgeComponent', () => {
  let component: StudentAgeComponent;
  let fixture: ComponentFixture<StudentAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
