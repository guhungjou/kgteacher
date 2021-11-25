import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfAvatarComponent } from './self-avatar.component';

describe('SelfAvatarComponent', () => {
  let component: SelfAvatarComponent;
  let fixture: ComponentFixture<SelfAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
