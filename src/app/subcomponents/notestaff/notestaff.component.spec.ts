import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotestaffComponent } from './notestaff.component';

describe('NotestaffComponent', () => {
  let component: NotestaffComponent;
  let fixture: ComponentFixture<NotestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotestaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
