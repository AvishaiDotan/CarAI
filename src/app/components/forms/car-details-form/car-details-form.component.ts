import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
@Component({
	selector: 'car-details-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		FormsModule,
		MatError,
		MatFormFieldModule,
		MatInputModule,
		MatSelect,
		MatOption,
		MatRadioModule
	],
	templateUrl: './car-details-form.component.html',
	styleUrl: './car-details-form.component.scss'
})
export class CarDetailsFormComponent {
	@Input() CarDetailsForm!: FormGroup;

	seats: number[] = [2, 3, 4, 5, 6, 7];
	motorTypes: string[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];



	onSubmit() {
		if (this.CarDetailsForm && this.CarDetailsForm.valid) {
			console.log(this.CarDetailsForm.value);
		}
	}
}
