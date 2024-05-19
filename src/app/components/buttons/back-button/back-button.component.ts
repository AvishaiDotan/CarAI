import { Component, Input } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
	selector: 'back-button',
	standalone: true,
	imports: [MatIconModule,
		MatIcon],
	templateUrl: './back-button.component.html',
	styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {

	@Input() path: string = '/';
	constructor(private router: Router) { }

	getBack() {
		this.router.navigate([this.path]);
	}
}
