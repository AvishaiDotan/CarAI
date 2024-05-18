import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormValidationChangeDirective } from '../../../directives/form-validation-change.directive';
import { FormHelperBase } from '../../../classes/FormHelperClass';

@Component({
    selector: 'location-form',
    standalone: true,
    imports: [
        MatFormFieldModule, 
        MatError,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        FormValidationChangeDirective
    ],
    templateUrl: './location-form.component.html',
    styleUrl: './location-form.component.scss'
})
export class LocationFormComponent {
    @Input() locationFrom!: FormGroup;
    @Output() onFormValidationChange = new EventEmitter<boolean>();

	focusOnInvalidField() {
		for (const key of Object.keys(this.locationFrom.controls)) {
			const control = this.locationFrom.get(key);
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
