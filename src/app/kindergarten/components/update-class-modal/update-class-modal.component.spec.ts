import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassModalComponent } from './update-class-modal.component';

describe('UpdateClassModalComponent', () => {
  let component: UpdateClassModalComponent;
  let fixture: ComponentFixture<UpdateClassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateClassModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
