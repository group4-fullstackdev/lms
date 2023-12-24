import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsubmitformComponent } from './studentsubmitform.component';

describe('StudentsubmitformComponent', () => {
  let component: StudentsubmitformComponent;
  let fixture: ComponentFixture<StudentsubmitformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsubmitformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentsubmitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
