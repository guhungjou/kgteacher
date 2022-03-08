import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemoglobinLabelComponent } from './hemoglobin-label.component';

describe('HemoglobinLabelComponent', () => {
  let component: HemoglobinLabelComponent;
  let fixture: ComponentFixture<HemoglobinLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HemoglobinLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemoglobinLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
