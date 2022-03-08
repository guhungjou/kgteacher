import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreLabelComponent } from './score-label.component';

describe('ScoreLabelComponent', () => {
  let component: ScoreLabelComponent;
  let fixture: ComponentFixture<ScoreLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
