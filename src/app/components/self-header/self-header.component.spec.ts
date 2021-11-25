import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfHeaderComponent } from './self-header.component';

describe('SelfHeaderComponent', () => {
  let component: SelfHeaderComponent;
  let fixture: ComponentFixture<SelfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
