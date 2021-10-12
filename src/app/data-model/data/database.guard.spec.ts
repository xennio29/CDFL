import { TestBed } from '@angular/core/testing';

import { DatabaseGuard } from './database.guard';

describe('DatabaseGuardGuard', () => {
  let guard: DatabaseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DatabaseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
