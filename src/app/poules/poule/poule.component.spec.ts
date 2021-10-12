import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouleComponent } from './poule.component';

describe('PouleComponent', () => {
  let component: PouleComponent;
  let fixture: ComponentFixture<PouleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
