import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexForm } from './index-form.component';

describe('BuyerDetailsFormComponent', () => {
  let component: IndexForm;
  let fixture: ComponentFixture<IndexForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexForm]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
