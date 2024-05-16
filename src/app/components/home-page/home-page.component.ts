import { Component, EventEmitter, Output } from '@angular/core';
import { AppHeroComponent } from '../app-hero/app-hero.component';
import { AppWelcomeComponent } from '../app-welcome/app-welcome.component';
import { Router } from '@angular/router';

@Component({
	selector: 'home-page',
	standalone: true,
	imports: [AppHeroComponent, AppWelcomeComponent],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
	
	constructor(private router: Router) {}

	OpenForm() {
		this.router.navigate(['/form']);
	}
}
