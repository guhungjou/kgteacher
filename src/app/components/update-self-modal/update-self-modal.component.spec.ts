import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSelfModalComponent } from './update-self-modal.component';

describe('UpdateSelfModalComponent', () => {
  let component: UpdateSelfModalComponent;
  let fixture: ComponentFixture<UpdateSelfModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSelfModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSelfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
