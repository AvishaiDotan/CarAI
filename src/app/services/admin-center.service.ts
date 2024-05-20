import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppStatistics, GraphDataItem, PolarGraphItem } from '../models';
import { LocalStorageService } from './local-storage.service';
import { FormService } from './form.service';
import { UtilitiesService } from './utilities.service';
import { activeUserDetailsGraphProperty } from '../models/active-user-details-graph-property.model';
import { ActiveCarDetailsGraphProperty } from '../models/active-car-details-graph-property.model';

@Injectable({
	providedIn: 'root'
})
export class AdminCenterService {

	private _appStatistics$: BehaviorSubject<AppStatistics | null> = new BehaviorSubject<AppStatistics | null>(null)
	appStatistics$ = this._appStatistics$.asObservable();

	private _activeUserDetailsGraphProperty$: BehaviorSubject<activeUserDetailsGraphProperty> = new BehaviorSubject<activeUserDetailsGraphProperty>('gender')
	activeUserDetailsGraphProperty$ = this._activeUserDetailsGraphProperty$.asObservable();

	private _activeCarDetailsGraphProperty$: BehaviorSubject<ActiveCarDetailsGraphProperty> = new BehaviorSubject<ActiveCarDetailsGraphProperty>('motor type')
	activeCarDetailsGraphProperty$ = this._activeCarDetailsGraphProperty$.asObservable();

	private _userDetailsGraphData$: BehaviorSubject<GraphDataItem[]> = new BehaviorSubject<GraphDataItem[]>([])
	userDetailsGraphData$ = this._userDetailsGraphData$.asObservable();

	private _carDetailsGraphData$: BehaviorSubject<GraphDataItem[]> = new BehaviorSubject<GraphDataItem[]>([])
	carDetailsGraphData$ = this._carDetailsGraphData$.asObservable();

	private _polarGraphItem$: BehaviorSubject<PolarGraphItem[]> = new BehaviorSubject<PolarGraphItem[]>([])
	polarGraphItem$ = this._polarGraphItem$.asObservable();

	constructor(private formService: FormService, private utilityService: UtilitiesService) { }

	public loadAppStatistics() {
		var allForms = this.formService.getAllFormsSync();
		const appStatistics: AppStatistics = {
			"Total Visitors": 100,
			"Total Forms Submitted": allForms.length,
			"Max Submissions Per Day": this.utilityService.getBirthDateWithMostOccurrences(allForms),
			"Top Country": this.utilityService.getCountryWithMostOccurrences(allForms)
		}
		this._appStatistics$.next(appStatistics);
	}

	public loadUserDetailsGraphData(graphProperty: activeUserDetailsGraphProperty | null = null): void {
		var allForms = this.formService.getAllFormsSync();

		if (graphProperty) {
			this._activeUserDetailsGraphProperty$.next(graphProperty);
		}

		var activeProperty = this._activeUserDetailsGraphProperty$.value;
		var data: GraphDataItem[] = [];

		switch (activeProperty) {
			case 'gender':
				data = this.utilityService.getSumGenderCounts(allForms);
				this._userDetailsGraphData$.next(data);
				break;
			case 'age':
				data = this.utilityService.getSumAgeCounts(allForms);
				this._userDetailsGraphData$.next(data);
				break;
			case 'country':
				data = this.utilityService.getSumCountryCounts(allForms);
				this._userDetailsGraphData$.next(data);
				break;
		}
	}

	public loadCarDetailsGraphData(graphProperty: ActiveCarDetailsGraphProperty | null = null): void {
		var allForms = this.formService.getAllFormsSync();

		if (graphProperty) {
			this._activeCarDetailsGraphProperty$.next(graphProperty);
		}

		var activeProperty = this._activeCarDetailsGraphProperty$.value;
		var data: GraphDataItem[] = [];

		switch (activeProperty) {
			case 'motor type':
				data = this.utilityService.getSumMotorTypeCounts(allForms);
				this._carDetailsGraphData$.next(data);
				break;
			case 'seats':
				data = this.utilityService.getSumSeatsCounts(allForms);
				this._carDetailsGraphData$.next(data);
				break;
		}
	}

	public loadPolarGraphData(): void {
		var allForms = this.formService.getAllFormsSync();



		var data = this.utilityService.getPolarGraphData(allForms);
		console.log(data);
		
		this._polarGraphItem$.next(data);
	}

}
