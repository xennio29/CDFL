import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqualifiedComponent } from './addqualified.component';

describe('AddqualifiedComponent', () => {
  let component: AddqualifiedComponent;
  let fixture: ComponentFixture<AddqualifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddqualifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddqualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
