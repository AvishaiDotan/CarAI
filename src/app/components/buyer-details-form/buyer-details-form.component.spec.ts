import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDetailsFormComponent } from './buyer-details-form.component';

describe('BuyerDetailsFormComponent', () => {
  let component: BuyerDetailsFormComponent;
  let fixture: ComponentFixture<BuyerDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
