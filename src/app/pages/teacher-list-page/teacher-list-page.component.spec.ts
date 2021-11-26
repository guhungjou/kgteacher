import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherListPageComponent } from './teacher-list-page.component';

describe('TeacherListPageComponent', () => {
  let component: TeacherListPageComponent;
  let fixture: ComponentFixture<TeacherListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherListPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
