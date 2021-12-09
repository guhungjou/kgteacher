import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStudentModalComponent } from './load-student-modal.component';

describe('LoadStudentModalComponent', () => {
  let component: LoadStudentModalComponent;
  let fixture: ComponentFixture<LoadStudentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadStudentModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
