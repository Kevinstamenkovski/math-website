import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegralCalculusComponent } from './integral-calculus.component';

describe('IntegralCalculusComponent', () => {
  let component: IntegralCalculusComponent;
  let fixture: ComponentFixture<IntegralCalculusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegralCalculusComponent]
    });
    fixture = TestBed.createComponent(IntegralCalculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
