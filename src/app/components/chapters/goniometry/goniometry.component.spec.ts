import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoniometryComponent } from './goniometry.component';

describe('GoniometryComponent', () => {
  let component: GoniometryComponent;
  let fixture: ComponentFixture<GoniometryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoniometryComponent]
    });
    fixture = TestBed.createComponent(GoniometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
