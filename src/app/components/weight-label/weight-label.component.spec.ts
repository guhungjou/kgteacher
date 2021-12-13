import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLabelComponent } from './weight-label.component';

describe('WeightLabelComponent', () => {
  let component: WeightLabelComponent;
  let fixture: ComponentFixture<WeightLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeightLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
