import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
	selector: 'buyer-details-form',
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
		MatNativeDateModule],
	templateUrl: './buyer-details-form.component.html',
	styleUrl: './buyer-details-form.component.scss'
})
export class BuyerDetailsFormComponent implements OnInit {
	form!: FormGroup;
	genders: string[] = [
		'Male',
		'Female',
	]


	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.form = this.fb.group({
			fullName: ['', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(10),
				Validators.pattern(/^[a-zA-Z ]*$/),
				this.noNumbersValidator
			]],
			gender: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			birthDate: ['', [this.validDateValidator, Validators.required]],
			// address: ['', Validators.required],
			// city: ['', Validators.required],
			// country: ['', Validators.required],
			// hobbies: [[]],
			// favoriteColor: ['', Validators.required],
			// seats: [null, Validators.required],
			// motorType: ['', Validators.required]
		});
	}

	onSubmit() {
		if (this.form.valid) {
			console.log(this.form.value);
		}
	}

	noNumbersValidator(control: AbstractControl): ValidationErrors | null {
		const hasNumber = /\d/.test(control.value);
		return hasNumber ? { 'noNumbers': true } : null;
	}

	validDateValidator(control: AbstractControl): ValidationErrors | null {
		if (!control.value) {
			return { 'invalidDate': true };
		}

		const timestamp = control.value;
		const date = new Date(timestamp);

		// Convert date to DD/MM/YYYY format
		const day = ('0' + date.getDate()).slice(-2);
		const month = ('0' + (date.getMonth() + 1)).slice(-2);
		const year = date.getFullYear();
		const dateString = `${day}/${month}/${year}`;

		const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
		const isValidDate = datePattern.test(dateString);

		if (!isValidDate) {
			return { 'invalidDate': true };
		}

		// Further validation to check if the constructed date matches the timestamp
		const parts = dateString.split('/');
		const parsedDay = parseInt(parts[0], 10);
		const parsedMonth = parseInt(parts[1], 10);
		const parsedYear = parseInt(parts[2], 10);

		if (parsedDay !== date.getDate() || parsedMonth !== (date.getMonth() + 1) || parsedYear !== date.getFullYear()) {
			return { 'invalidDate': true };
		}

		return null;
	}
}
