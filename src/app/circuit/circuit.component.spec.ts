import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitComponent } from './circuit.component';

describe('CircuitComponent', () => {
  let component: CircuitComponent;
  let fixture: ComponentFixture<CircuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
