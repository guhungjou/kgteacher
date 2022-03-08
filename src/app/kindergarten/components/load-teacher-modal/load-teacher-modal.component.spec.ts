import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTeacherModalComponent } from './load-teacher-modal.component';

describe('LoadTeacherModalComponent', () => {
  let component: LoadTeacherModalComponent;
  let fixture: ComponentFixture<LoadTeacherModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadTeacherModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTeacherModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
