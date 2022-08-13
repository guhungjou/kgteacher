import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictLabelComponent } from './district-label.component';

describe('DistrictLabelComponent', () => {
  let component: DistrictLabelComponent;
  let fixture: ComponentFixture<DistrictLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
