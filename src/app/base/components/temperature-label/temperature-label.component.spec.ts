import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureLabelComponent } from './temperature-label.component';

describe('TemperatureLabelComponent', () => {
  let component: TemperatureLabelComponent;
  let fixture: ComponentFixture<TemperatureLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
