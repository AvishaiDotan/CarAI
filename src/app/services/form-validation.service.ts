import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }

  public static noNumbersValidator(control: AbstractControl): ValidationErrors | null {
		const hasNumber = /\d/.test(control.value);
		return hasNumber ? { 'noNumbers': true } : null;
	}

	public static validDateValidator(control: AbstractControl): ValidationErrors | null {
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
