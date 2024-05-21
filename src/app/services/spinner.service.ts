import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { SpinnerActivationPayload } from '../models';

@Injectable({
	providedIn: 'root'
})
export class SpinnerService {
	private _spinnerState$ = new BehaviorSubject<SpinnerActivationPayload>({ isShow: false, messages: [], callBackFunction: () => {} });
	spinnerState$ = this._spinnerState$.asObservable();

	private _cancelToken$ = new Subject<void>();
	cancelToken$ = this._cancelToken$.asObservable();
	constructor() {}

	show(payload: SpinnerActivationPayload) {
		this._spinnerState$.next(payload);
	}

	cancel() {
		this._cancelToken$.next();
	}


}
