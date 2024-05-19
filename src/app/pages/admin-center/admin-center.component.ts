import { CommonModule, AsyncPipe } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { AdminCenterService } from '../../services/admin-center.service';
import { Observable, Subscription } from 'rxjs';
import { AppStatistics, UserDetailsForm } from '../../models';
import {MatTableModule, MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatColumnDef, MatRow, MatRowDef, MatTable} from '@angular/material/table';
import { FormService } from '../../services/form.service';

@Component({
	selector: 'admin-center',
	standalone: true,
	imports: [CommonModule, AsyncPipe, MatTableModule, MatTable,MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatColumnDef, MatRow, MatRowDef],
	templateUrl: './admin-center.component.html',
	styleUrl: './admin-center.component.scss'
})
export class AdminCenterComponent implements OnInit{

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

	displayedColumns: string[] = ['address', 'birthDate', 'city', 'country'];

	ngOnInit(): void {
		this.adminCenterService.loadAppStatistics();
		this.formService.loadForms();
		this.appStatistics$ = this.adminCenterService.appStatistics$;
		this.forms$ = this.formService.formsDb$;
		this.forms$.subscribe(S => console.log(S));
		
	}
}
