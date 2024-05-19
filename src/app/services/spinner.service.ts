import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { SpinnerActivationPayload } from '../models';

@Injectable({
	providedIn: 'root'
})
export class SpinnerService {
	private spinnerSubject = new BehaviorSubject<SpinnerActivationPayload>({ isShow: false, messages: [], callBackFunction: () => {} });
	spinnerState$ = this.spinnerSubject.asObservable();

	constructor() {}

	show(payload: SpinnerActivationPayload) {
		this.spinnerSubject.next(payload);
	}


}
