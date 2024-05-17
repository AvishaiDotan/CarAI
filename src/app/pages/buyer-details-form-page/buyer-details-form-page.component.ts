import { Component } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router';
import { IndexForm } from '../../components/forms/index-form/index-form.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
	selector: 'buyer-details-form-page',
	standalone: true,
	imports: [
		MatIconModule, 
		MatIcon, 
		MatButtonModule, 
		IndexForm],
	templateUrl: './buyer-details-form-page.component.html',
	styleUrl: './buyer-details-form-page.component.scss'
})
export class BuyerDetailsFormPageComponent {

	constructor(private router: Router) { }

	goToHome() {
		this.router.navigate(['/']);
	}
}
