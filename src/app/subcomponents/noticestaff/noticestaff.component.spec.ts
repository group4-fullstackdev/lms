import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticestaffComponent } from './noticestaff.component';

describe('NoticestaffComponent', () => {
  let component: NoticestaffComponent;
  let fixture: ComponentFixture<NoticestaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticestaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticestaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
