import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditnoteComponent } from './editnote.component';

describe('EditnoteComponent', () => {
  let component: EditnoteComponent;
  let fixture: ComponentFixture<EditnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditnoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
