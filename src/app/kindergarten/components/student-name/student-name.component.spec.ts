import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNameComponent } from './student-name.component';

describe('StudentNameComponent', () => {
  let component: StudentNameComponent;
  let fixture: ComponentFixture<StudentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
