import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentialCalculusComponent } from './differential-calculus.component';

describe('DifferentialCalculusComponent', () => {
  let component: DifferentialCalculusComponent;
  let fixture: ComponentFixture<DifferentialCalculusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferentialCalculusComponent]
    });
    fixture = TestBed.createComponent(DifferentialCalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
