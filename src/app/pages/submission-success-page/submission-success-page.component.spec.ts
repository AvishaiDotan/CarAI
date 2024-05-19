import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionSuccessPageComponent } from './submission-success-page.component';

describe('SubmissionSuccessPageComponent', () => {
  let component: SubmissionSuccessPageComponent;
  let fixture: ComponentFixture<SubmissionSuccessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmissionSuccessPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmissionSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
