import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentModalComponent } from './update-student-modal.component';

describe('UpdateStudentModalComponent', () => {
  let component: UpdateStudentModalComponent;
  let fixture: ComponentFixture<UpdateStudentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
