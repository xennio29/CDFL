import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyRiftComponent } from './weekly-rift.component';

describe('WeeklyRiftComponent', () => {
  let component: WeeklyRiftComponent;
  let fixture: ComponentFixture<WeeklyRiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyRiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyRiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
