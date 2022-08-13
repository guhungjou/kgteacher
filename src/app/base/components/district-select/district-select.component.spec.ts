import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictSelectComponent } from './district-select.component';

describe('DistrictSelectComponent', () => {
  let component: DistrictSelectComponent;
  let fixture: ComponentFixture<DistrictSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
