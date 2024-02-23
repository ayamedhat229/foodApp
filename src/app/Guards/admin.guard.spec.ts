import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AdminGuard } from './admin.guard'; // Assuming AdminGuard is the correct name

describe('AdminGuard', () => {
  let guard: AdminGuard; // Declare guard variable

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard] // Provide AdminGuard
    });
    guard = TestBed.inject(AdminGuard); // Inject AdminGuard
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

