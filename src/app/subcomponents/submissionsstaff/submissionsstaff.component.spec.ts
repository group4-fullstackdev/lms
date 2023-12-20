import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsstaffComponent } from './submissionsstaff.component';

describe('SubmissionsstaffComponent', () => {
  let component: SubmissionsstaffComponent;
  let fixture: ComponentFixture<SubmissionsstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionsstaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmissionsstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
