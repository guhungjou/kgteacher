import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2LineComponent } from './g2-line.component';

describe('G2LineComponent', () => {
  let component: G2LineComponent;
  let fixture: ComponentFixture<G2LineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G2LineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(G2LineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
