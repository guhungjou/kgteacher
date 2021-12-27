import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMorningCheckTemperatureVisionComponent } from './student-morning-check-temperature-vision.component';

describe('StudentMorningCheckTemperatureVisionComponent', () => {
  let component: StudentMorningCheckTemperatureVisionComponent;
  let fixture: ComponentFixture<StudentMorningCheckTemperatureVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMorningCheckTemperatureVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMorningCheckTemperatureVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
