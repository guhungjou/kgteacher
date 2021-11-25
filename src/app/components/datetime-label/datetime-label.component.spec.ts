import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeLabelComponent } from './datetime-label.component';

describe('DatetimeLabelComponent', () => {
  let component: DatetimeLabelComponent;
  let fixture: ComponentFixture<DatetimeLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatetimeLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatetimeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
