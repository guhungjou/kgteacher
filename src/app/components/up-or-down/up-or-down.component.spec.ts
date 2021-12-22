import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpOrDownComponent } from './up-or-down.component';

describe('UpOrDownComponent', () => {
  let component: UpOrDownComponent;
  let fixture: ComponentFixture<UpOrDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpOrDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpOrDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
