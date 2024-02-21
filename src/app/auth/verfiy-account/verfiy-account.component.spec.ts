import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiyAccountComponent } from './verfiy-account.component';

describe('VerfiyAccountComponent', () => {
  let component: VerfiyAccountComponent;
  let fixture: ComponentFixture<VerfiyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerfiyAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerfiyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
