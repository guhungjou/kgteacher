import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightLabelComponent } from './height-label.component';

describe('HeightLabelComponent', () => {
  let component: HeightLabelComponent;
  let fixture: ComponentFixture<HeightLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeightLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
