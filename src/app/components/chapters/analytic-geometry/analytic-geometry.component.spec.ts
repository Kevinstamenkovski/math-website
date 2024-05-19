import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticGeometryComponent } from './analytic-geometry.component';

describe('AnalyticGeometryComponent', () => {
  let component: AnalyticGeometryComponent;
  let fixture: ComponentFixture<AnalyticGeometryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticGeometryComponent]
    });
    fixture = TestBed.createComponent(AnalyticGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
