import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexNumbersComponent } from './complex-numbers.component';

describe('ComplexNumbersComponent', () => {
  let component: ComplexNumbersComponent;
  let fixture: ComponentFixture<ComplexNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexNumbersComponent]
    });
    fixture = TestBed.createComponent(ComplexNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
