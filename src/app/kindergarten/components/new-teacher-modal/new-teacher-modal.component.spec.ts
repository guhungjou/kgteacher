import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeacherModalComponent } from './new-teacher-modal.component';

describe('NewTeacherModalComponent', () => {
  let component: NewTeacherModalComponent;
  let fixture: ComponentFixture<NewTeacherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewTeacherModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeacherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
