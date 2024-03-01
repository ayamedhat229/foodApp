import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcomponentComponent } from './add-editcomponent.component';

describe('AddEditcomponentComponent', () => {
  let component: AddEditcomponentComponent;
  let fixture: ComponentFixture<AddEditcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
