import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { UsersGuard } from './users.guard'; // Assuming UserGuard is the correct name

describe('UserGuard', () => {
  let guard: UsersGuard; // Declare guard variable

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersGuard] // Provide UserGuard
    });
    guard = TestBed.inject(UsersGuard); // Inject UserGuard
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
