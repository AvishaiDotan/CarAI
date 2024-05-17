import { Component, EventEmitter, Output } from '@angular/core';


import { Router } from '@angular/router';
import { AppHeroComponent } from '../../components/app-hero/app-hero.component';
import { AppWelcomeComponent } from '../../components/app-welcome/app-welcome.component';

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
