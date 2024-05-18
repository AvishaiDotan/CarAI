import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatRadioModule, MatRadioGroup, MatRadioButton,  } from '@angular/material/radio';
import { FormValidationChangeDirective } from '../../../directives/form-validation-change.directive';
@Component({
	selector: 'car-details-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		// MatError,
		MatFormFieldModule,
		// MatInputModule,
		MatSelect,
		MatOption,
		// MatRadioModule,
		FormValidationChangeDirective,
		MatRadioGroup,
		MatRadioButton,
		
	],
	templateUrl: './car-details-form.component.html',
	styleUrl: './car-details-form.component.scss'
})
export class CarDetailsFormComponent {
	@Input() CarDetailsForm!: FormGroup;
	@Output() onFormValidationChange = new EventEmitter<boolean>();
	
	seats: number[] = [2, 3, 4, 5, 6, 7];
	motorTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];

	focusOnInvalidField() {
		
		for (const key of Object.keys(this.CarDetailsForm.controls)) {
			const control = this.CarDetailsForm.get(key);
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
