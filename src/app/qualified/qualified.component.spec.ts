import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifiedComponent } from './qualified.component';

describe('QualifiedComponent', () => {
  let component: QualifiedComponent;
  let fixture: ComponentFixture<QualifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
