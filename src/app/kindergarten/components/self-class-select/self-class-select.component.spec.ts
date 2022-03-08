import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfClassSelectComponent } from './self-class-select.component';

describe('SelfClassSelectComponent', () => {
  let component: SelfClassSelectComponent;
  let fixture: ComponentFixture<SelfClassSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelfClassSelectComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfClassSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
