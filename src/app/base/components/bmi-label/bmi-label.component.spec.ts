import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiLabelComponent } from './bmi-label.component';

describe('BmiLabelComponent', () => {
  let component: BmiLabelComponent;
  let fixture: ComponentFixture<BmiLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
