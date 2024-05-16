import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroComponent } from './app-hero.component';

describe('AppHeroComponent', () => {
  let component: AppHeroComponent;
  let fixture: ComponentFixture<AppHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
