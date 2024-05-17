import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesAndFavoriteColorFormComponent } from './hobbies-and-favorite-color-form.component';

describe('HobbiesAndFavoriteColorFormComponent', () => {
  let component: HobbiesAndFavoriteColorFormComponent;
  let fixture: ComponentFixture<HobbiesAndFavoriteColorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesAndFavoriteColorFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbiesAndFavoriteColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
