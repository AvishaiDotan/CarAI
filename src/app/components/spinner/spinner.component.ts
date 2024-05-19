import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable, Subscription, finalize, interval, map, take } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';
import { SpinnerActivationPayload } from '../../models';
import { BackButtonComponent } from '../buttons/back-button/back-button.component';
@Component({
	selector: 'spinner',
	standalone: true,
	imports: [
		MatIconModule, MatIcon, CommonModule,
		BackButtonComponent

	],
	templateUrl: './spinner.component.html',
	styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit, OnDestroy {

	private subscription!: Subscription;
  
	constructor(private spinnerService: SpinnerService, private router: Router) {}
  
	ngOnInit() {
	  this.subscription = this.spinnerService.spinnerState$.subscribe(
		(activationPayload: SpinnerActivationPayload) => {
			if (activationPayload.isShow) {
				this.show(activationPayload);
			}
			else {
				this.displaySettings = 'hide';
			}
		}
	  );
	}
  
	ngOnDestroy() {
	  if (this.subscription) {
		this.subscription.unsubscribe();
	  }
	}

	message: string | undefined;
	spinnerTextMessages = [
		'We Are Processing Your Request...',
		'Your Car Suggestion Are On The Way...',
		'Please Wait...',
		'Our Agent Is Working On Your Request...',
		'Just A Moment...',
		'Your Car Suggestion Are Being Prepared...',
		'Thank You For Your Patience...',
	]
	displaySettings = 'hide'


	show(activationPayload: SpinnerActivationPayload) {
		this.displaySettings = 'show';

		interval(1500).pipe(
			take(activationPayload.messages.length),  // Limit the number of emissions to the length of spinnerTextMessages
			map(index => activationPayload.messages[index]),  // Map each emission to the corresponding message
			finalize(() => {
				this.displaySettings = 'hide';
				activationPayload.callBackFunction();
			})
		).subscribe(message => {
			this.message = message;  // Update the bound property
		});
	}

	goToHome() {
		this.router.navigate(['/form']);
	}

}
