import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclistComponent } from './disclist.component';

describe('DisclistComponent', () => {
  let component: DisclistComponent;
  let fixture: ComponentFixture<DisclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
