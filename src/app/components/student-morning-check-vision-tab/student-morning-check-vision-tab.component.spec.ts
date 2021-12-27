import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMorningCheckVisionTabComponent } from './student-morning-check-vision-tab.component';

describe('StudentMorningCheckTemperatureVisionComponent', () => {
  let component: StudentMorningCheckVisionTabComponent;
  let fixture: ComponentFixture<StudentMorningCheckVisionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentMorningCheckVisionTabComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMorningCheckVisionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
