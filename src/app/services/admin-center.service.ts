import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppStatistics } from '../models';
import { LocalStorageService } from './local-storage.service';
import { FormService } from './form.service';
import { UtilitiesService } from './utilities.service';

@Injectable({
	providedIn: 'root'
})
export class AdminCenterService {
	private _appStatistics$: BehaviorSubject<AppStatistics | null> = new BehaviorSubject<AppStatistics | null>(null)
	appStatistics$ = this._appStatistics$.asObservable();

	constructor(private formService: FormService, private utilityService: UtilitiesService) { }

	public loadAppStatistics() {
		var allForms = this.formService.getAllFormsSync();
		const appStatistics: AppStatistics = {
			"Total Visitors": 100,
			"Total Forms Submitted": allForms.length,
			"Max Submissions Per Birth Day": this.utilityService.getBirthDateWithMostOccurrences(allForms),
			"Top Country": this.utilityService.getCountryWithMostOccurrences(allForms)
		}
		this._appStatistics$.next(appStatistics);
	}
}
