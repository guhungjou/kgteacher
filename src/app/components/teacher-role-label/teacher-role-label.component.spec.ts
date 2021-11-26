import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRoleLabelComponent } from './teacher-role-label.component';

describe('KindergartenTeacherRoleLabelComponent', () => {
  let component: TeacherRoleLabelComponent;
  let fixture: ComponentFixture<TeacherRoleLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherRoleLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRoleLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
