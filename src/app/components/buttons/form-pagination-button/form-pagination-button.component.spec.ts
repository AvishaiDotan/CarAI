import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPaginationButtonComponent } from './form-pagination-button.component';

describe('FormPaginationButtonComponent', () => {
  let component: FormPaginationButtonComponent;
  let fixture: ComponentFixture<FormPaginationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPaginationButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPaginationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
