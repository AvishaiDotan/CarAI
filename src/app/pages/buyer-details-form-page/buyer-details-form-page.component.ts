import { Component, ViewChild } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router';
import { IndexForm } from '../../components/forms/index-form/index-form.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerActivationPayload, UserDetailsForm } from '../../models';
import { FormService } from '../../services/form.service';
import { SpinnerComponent } from '../../components/spinner/spinner.component';
import { SpinnerService } from '../../services/spinner.service';
import { BackButtonComponent } from '../../components/buttons/back-button/back-button.component';
@Component({
	selector: 'buyer-details-form-page',
	standalone: true,
	imports: [
		MatIconModule, 
		MatIcon, 
		MatButtonModule, 
		IndexForm,
		BackButtonComponent
	],
	templateUrl: './buyer-details-form-page.component.html',
	styleUrl: './buyer-details-form-page.component.scss'
})
export class BuyerDetailsFormPageComponent {

	constructor(private router: Router, private formService: FormService, private spinnerService: SpinnerService) { }

	goToHome() {
		this.router.navigate(['/']);
	}
	
	async submitForm(userDetailsForm: UserDetailsForm) {
		try {
			await this.formService.postUserDetailsForm(userDetailsForm);
			const payload: SpinnerActivationPayload = {
				isShow: true,
				messages: [
					'We Are Processing Your Request...',
					'Your Car Suggestion Are On The Way...',
					'Please Wait...',
					'Our Agent Is Working On Your Request...',
					'Just A Moment...',
					'Your Car Suggestion Are Being Prepared...',
					'Thank You For Your Patience...',
				],
				callBackFunction: () => {
					this.router.navigate([`/success/${userDetailsForm.fullName}/${userDetailsForm.email}`]);
				
				}
			}
			this.spinnerService.show(payload);
		}
		catch (error: any) {
			console.log(error);
			
		}
	}
}
