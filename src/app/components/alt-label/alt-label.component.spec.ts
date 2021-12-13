import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltLabelComponent } from './alt-label.component';

describe('AltLabelComponent', () => {
  let component: AltLabelComponent;
  let fixture: ComponentFixture<AltLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
