import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UserMessageService {

	constructor() { }

	public showMessage(message: any): void {
		console.log(message);
	}
}
