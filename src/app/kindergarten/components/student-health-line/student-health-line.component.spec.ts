import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHealthLineComponent } from './student-health-line.component';

describe('StudentHealthLineComponent', () => {
  let component: StudentHealthLineComponent;
  let fixture: ComponentFixture<StudentHealthLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHealthLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHealthLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
