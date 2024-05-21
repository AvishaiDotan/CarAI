import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, finalize, interval, map, take, takeUntil } from 'rxjs';
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

	private spinnerStateSubscription!: Subscription;
	private messageIntervalSubscription!: Subscription;
	cancelToken = new Subject<void>();


	constructor(private spinnerService: SpinnerService, private router: Router) {}
  
	ngOnInit() {
	  this.spinnerStateSubscription = this.spinnerService.spinnerState$.subscribe(
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
	  if (this.spinnerStateSubscription) {
		this.spinnerStateSubscription.unsubscribe();
	  }
	}

	message: string | undefined;
	displaySettings = 'hide'


	show(activationPayload: SpinnerActivationPayload) {
		this.displaySettings = 'show';

		this.message = activationPayload.messages[0];

		this.messageIntervalSubscription = interval(1500).pipe(
			take(activationPayload.messages.length),  
			map(index => activationPayload.messages[index]),  
			takeUntil(this.spinnerService.cancelToken$), 
			finalize(() => {
				this.displaySettings = 'hide';
				activationPayload.callBackFunction();
			})
		).subscribe(message => {
			this.message = message;  
		});



		
	}

	goToHome() {
		this.router.navigate(['/form']);
	}

	cancelAction() {
		this.spinnerService.cancel();
		this.message = "";
		this.router.navigate(['/form']);
	}

}
