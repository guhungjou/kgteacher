import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightAndWeightLabelComponent } from './height-and-weight-label.component';

describe('HeightAndWeightLabelComponent', () => {
  let component: HeightAndWeightLabelComponent;
  let fixture: ComponentFixture<HeightAndWeightLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeightAndWeightLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightAndWeightLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
