import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2PieComponent } from './g2-pie.component';

describe('G2PieComponent', () => {
  let component: G2PieComponent;
  let fixture: ComponentFixture<G2PieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G2PieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(G2PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
