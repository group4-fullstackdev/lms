import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffaccountComponent } from './staffaccount.component';

describe('StaffaccountComponent', () => {
  let component: StaffaccountComponent;
  let fixture: ComponentFixture<StaffaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
