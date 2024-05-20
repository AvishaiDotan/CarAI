import { CommonModule, AsyncPipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AdminCenterService } from '../../services/admin-center.service';
import { Observable, Subscription } from 'rxjs';
import { AppStatistics, UserDetailsForm } from '../../models';
import { MatTableModule, MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatColumnDef, MatRow, MatRowDef, MatTable } from '@angular/material/table';
import { MatGridList, MatGridTile, MatGridListModule } from '@angular/material/grid-list';
import { FormService } from '../../services/form.service';
import { LegendPosition, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';

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


	constructor(private adminCenterService: AdminCenterService, private formService: FormService) { }

	activeDataType: string = 'Gender'

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
	displayedColumns: string[] = ['address', 'birthDate', 'city', 'country'];
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
		this.formService.loadForms();
		this.appStatistics$ = this.adminCenterService.appStatistics$;
		this.forms$ = this.formService.formsDb$;
		this.forms$.subscribe(S => console.log(S));

	}
}
