import { Injectable } from '@angular/core';
import { CarAIHttpClientService } from './car-aihttp-client.service';
import { UserDetailsForm } from '../models';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserMessageService } from './user-message.service';

@Injectable({
	providedIn: 'root'
})
export class FormService {
	formsDbKey = 'formsDb';

	private _formsDb$: BehaviorSubject<UserDetailsForm[]> = new BehaviorSubject<UserDetailsForm[]>([])
	formsDb$ = this._formsDb$.asObservable();

	constructor(
		private carAIhttpService: CarAIHttpClientService, 
		private localStorageService: LocalStorageService,
		private userMessageService: UserMessageService) { }

	public async postUserDetailsForm(userDetailsForm: UserDetailsForm): Promise<void> {
		
		// return await this.carAIhttpService.post('details', detailsForm);
		try {
			const forms = this.localStorageService.getItem<UserDetailsForm[]>(this.formsDbKey) || [];
			forms.push(userDetailsForm);
			this.localStorageService.setItem(this.formsDbKey, forms);
		}
		catch (error: any) {
			this.userMessageService.showMessage(error);
		}
	}

	public getAllFormsSync(): UserDetailsForm[] {
		const data = this.localStorageService.getItem<UserDetailsForm[]>(this.formsDbKey);
		return data || [];
	}

	public loadForms(): void {
		const forms = this.getAllFormsSync();
		this._formsDb$.next(forms);
	}
}
