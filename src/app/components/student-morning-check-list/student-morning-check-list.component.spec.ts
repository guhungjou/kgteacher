import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMorningCheckListComponent } from './student-morning-check-list.component';

describe('StudentMorningCheckListComponent', () => {
  let component: StudentMorningCheckListComponent;
  let fixture: ComponentFixture<StudentMorningCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMorningCheckListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMorningCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
