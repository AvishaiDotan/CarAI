import { CommonModule, AsyncPipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AdminCenterService } from '../../services/admin-center.service';
import { Observable, Subscription } from 'rxjs';
import { AppStatistics, GraphDataItem, PolarGraphItem, UserDetailsForm } from '../../models';
import { MatTableModule, MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatColumnDef, MatRow, MatRowDef, MatTable } from '@angular/material/table';
import { MatGridList, MatGridTile, MatGridListModule } from '@angular/material/grid-list';
import { FormService } from '../../services/form.service';
import { LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { activeUserDetailsGraphProperty } from '../../models/active-user-details-graph-property.model';
import { ActiveCarDetailsGraphProperty } from '../../models/active-car-details-graph-property.model';

@Component({
	selector: 'admin-center',
	standalone: true,
	imports: [NgxChartsModule, CommonModule, MatGridList, MatGridTile, MatGridListModule, AsyncPipe, MatTableModule, MatTable, MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatColumnDef, MatRow, MatRowDef],
	templateUrl: './admin-center.component.html',
	styleUrl: './admin-center.component.scss'
})
export class AdminCenterComponent implements OnInit {

	appStatistics$!: Observable<AppStatistics | null>
	forms$!: Observable<UserDetailsForm[]>
	activeGeneralUserDetailsGraphProperty$!: Observable<activeUserDetailsGraphProperty>;
	activeCarDetailsGraphProperty$!: Observable<ActiveCarDetailsGraphProperty>;
	generalUserDetailsGraphData$!: Observable<GraphDataItem[]>;
	carDetailsGraphData$!: Observable<GraphDataItem[]>;
	polarGraphData$!: Observable<PolarGraphItem[]>;


	constructor(private adminCenterService: AdminCenterService, private formService: FormService) { }

	generalUserDetailsGraphProperties: activeUserDetailsGraphProperty[] = ['country', 'gender', 'age'];
	carDetailsGraphProperties: ActiveCarDetailsGraphProperty[] = ['motor type', 'seats'];

	dataTypes = [
		'Gender',
		'Age',
		'Country',
		'Color',
		'Hobbies',
		'Seats',
	]



	colorScheme: any = {
		domain: ['#7bccdc', '#1181af', '#042d5f']
	};
	displayedColumns: string[] = ['fullName', 'birthDate', 'country', 'hobbies'];
	data = [
		{
			"name": "Female",
			"value": 8940000
		},
		{
			"name": "Male",
			"value": 5000000
		}
	];
	ngOnInit(): void {
		this.adminCenterService.loadAppStatistics();
		this.adminCenterService.loadUserDetailsGraphData();
		this.adminCenterService.loadCarDetailsGraphData();
		this.adminCenterService.loadPolarGraphData();
		this.formService.loadForms();
		this.appStatistics$ = this.adminCenterService.appStatistics$;
		this.activeGeneralUserDetailsGraphProperty$ = this.adminCenterService.activeUserDetailsGraphProperty$;
		this.activeCarDetailsGraphProperty$ = this.adminCenterService.activeCarDetailsGraphProperty$;
		this.generalUserDetailsGraphData$ = this.adminCenterService.userDetailsGraphData$;
		this.carDetailsGraphData$ = this.adminCenterService.carDetailsGraphData$;
		this.polarGraphData$ = this.adminCenterService.polarGraphItem$;
		this.forms$ = this.formService.formsDb$;
	}

	parseAge(timestamp: number): number {
		const dateOfBirth = new Date(timestamp);
		const currentDate = new Date();

		let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

		const monthDifference = currentDate.getMonth() - dateOfBirth.getMonth();
		const dayDifference = currentDate.getDate() - dateOfBirth.getDate();

		if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
			age--;
		}

		return age;
	}

	parseHobbies(list: string[]): string {
		return list.join(', ');
	}

	onActivatePropery(graph: string, property: activeUserDetailsGraphProperty | ActiveCarDetailsGraphProperty) {
		if (graph === 'userDetails') {
			this.adminCenterService.loadUserDetailsGraphData(property as activeUserDetailsGraphProperty);
		}
		else {
			this.adminCenterService.loadCarDetailsGraphData(property as ActiveCarDetailsGraphProperty);
		}
	}
}
