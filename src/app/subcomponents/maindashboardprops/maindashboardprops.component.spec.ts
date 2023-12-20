import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindashboardpropsComponent } from './maindashboardprops.component';

describe('MaindashboardpropsComponent', () => {
  let component: MaindashboardpropsComponent;
  let fixture: ComponentFixture<MaindashboardpropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaindashboardpropsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaindashboardpropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
