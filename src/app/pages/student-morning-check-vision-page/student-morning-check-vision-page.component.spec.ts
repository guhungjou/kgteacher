import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMorningCheckVisionPageComponent } from './student-morning-check-vision-page.component';

describe('StudentMorningCheckVisionPageComponent', () => {
  let component: StudentMorningCheckVisionPageComponent;
  let fixture: ComponentFixture<StudentMorningCheckVisionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMorningCheckVisionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMorningCheckVisionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
