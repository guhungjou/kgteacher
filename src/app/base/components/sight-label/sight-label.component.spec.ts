import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightLabelComponent } from './sight-label.component';

describe('SightLabelComponent', () => {
  let component: SightLabelComponent;
  let fixture: ComponentFixture<SightLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SightLabelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
