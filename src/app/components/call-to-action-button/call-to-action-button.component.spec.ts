import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToActionButtonComponent } from './call-to-action-button.component';

describe('CallToActionButtonComponent', () => {
  let component: CallToActionButtonComponent;
  let fixture: ComponentFixture<CallToActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToActionButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CallToActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
