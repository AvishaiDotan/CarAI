import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { debounceTime } from 'rxjs';
import { FormValidationChangeDirective } from '../../../directives/form-validation-change.directive';
import { FormHelperBase } from '../../../classes/FormHelperClass';


@Component({
	selector: 'personal-details-form',
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatError,
		MatSelect,
		MatOption,
		MatDatepickerModule,
		CommonModule,
		MatNativeDateModule,
		FormValidationChangeDirective
	],
	templateUrl: './personal-details-form.component.html',
	styleUrl: './personal-details-form.component.scss'
})
export class PersonalDetailsFormComponent {
	@Input() personalDetailsFrom!: FormGroup;
	@Output() onFormValidationChange = new EventEmitter<boolean>();

	genders: string[] = [
		"Male",
		'Female',
	]

	focusOnInvalidField() {
		for (const key of Object.keys(this.personalDetailsFrom.controls)) {
			const control = this.personalDetailsFrom.get(key);
			if (control && control.invalid) {
				const invalidControl = document.querySelector(`[formControlName="${key}"]`);
				if (invalidControl) {
					(invalidControl as HTMLElement).focus();
					control.markAsTouched();
					break;
				}
			}
		}
	}
}
