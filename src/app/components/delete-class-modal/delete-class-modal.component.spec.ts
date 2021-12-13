import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteClassModalComponent } from './delete-class-modal.component';

describe('DeleteClassModalComponent', () => {
  let component: DeleteClassModalComponent;
  let fixture: ComponentFixture<DeleteClassModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteClassModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteClassModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
