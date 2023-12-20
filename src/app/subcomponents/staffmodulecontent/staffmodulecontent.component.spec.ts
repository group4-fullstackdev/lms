import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffmodulecontentComponent } from './staffmodulecontent.component';

describe('StaffmodulecontentComponent', () => {
  let component: StaffmodulecontentComponent;
  let fixture: ComponentFixture<StaffmodulecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffmodulecontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffmodulecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
