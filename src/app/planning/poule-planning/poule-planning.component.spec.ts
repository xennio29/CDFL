import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoulePlanningComponent } from './poule-planning.component';

describe('PoulePlanningComponent', () => {
  let component: PoulePlanningComponent;
  let fixture: ComponentFixture<PoulePlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoulePlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoulePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
