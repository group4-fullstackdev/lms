import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmodulecontentComponent } from './studentmodulecontent.component';

describe('StudentmodulecontentComponent', () => {
  let component: StudentmodulecontentComponent;
  let fixture: ComponentFixture<StudentmodulecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentmodulecontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentmodulecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
