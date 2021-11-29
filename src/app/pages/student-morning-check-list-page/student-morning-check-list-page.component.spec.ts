import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMorningCheckListPageComponent } from './student-morning-check-list-page.component';

describe('StudentMorningCheckListPageComponent', () => {
  let component: StudentMorningCheckListPageComponent;
  let fixture: ComponentFixture<StudentMorningCheckListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMorningCheckListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMorningCheckListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
