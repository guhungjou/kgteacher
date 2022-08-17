import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2ColumnComponent } from './g2-column.component';

describe('G2ColumnComponent', () => {
  let component: G2ColumnComponent;
  let fixture: ComponentFixture<G2ColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ G2ColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(G2ColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
