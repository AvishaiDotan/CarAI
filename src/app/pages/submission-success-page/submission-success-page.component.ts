import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BackButtonComponent } from '../../components/buttons/back-button/back-button.component';

@Component({
	selector: 'submission-success-page',
	standalone: true,
	imports: [BackButtonComponent],
	templateUrl: './submission-success-page.component.html',
	styleUrl: './submission-success-page.component.scss'
})
export class SubmissionSuccessPageComponent implements OnInit, OnDestroy {
	userName: string | null = '';
	email: string | null = '';

	routeParamSubscription!: Subscription

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.routeParamSubscription = this.route.paramMap.subscribe(params => {
			this.userName = params.get('userName');
			this.email = params.get('email');
		});
	}

	ngOnDestroy(): void {
		if (this.routeParamSubscription) 
			this.routeParamSubscription.unsubscribe();
	}
}
