import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulecontentComponent } from './modulecontent.component';

describe('ModulecontentComponent', () => {
  let component: ModulecontentComponent;
  let fixture: ComponentFixture<ModulecontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulecontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModulecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
