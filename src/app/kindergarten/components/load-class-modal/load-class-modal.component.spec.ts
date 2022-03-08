import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadClassModalComponent } from './load-class-modal.component';

describe('LoadClassModalComponent', () => {
  let component: LoadClassModalComponent;
  let fixture: ComponentFixture<LoadClassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadClassModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
