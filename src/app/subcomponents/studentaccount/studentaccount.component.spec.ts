import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentaccountComponent } from './studentaccount.component';

describe('StudentaccountComponent', () => {
  let component: StudentaccountComponent;
  let fixture: ComponentFixture<StudentaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
