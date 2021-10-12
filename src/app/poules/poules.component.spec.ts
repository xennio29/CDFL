import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoulesComponent } from './poules.component';

describe('PoulesComponent', () => {
  let component: PoulesComponent;
  let fixture: ComponentFixture<PoulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
