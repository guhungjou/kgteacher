import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothLabelComponent } from './tooth-label.component';

describe('ToothLabelComponent', () => {
  let component: ToothLabelComponent;
  let fixture: ComponentFixture<ToothLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToothLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToothLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
