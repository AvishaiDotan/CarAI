import { Injectable } from '@angular/core';
import { UserDetailsForm } from '../models';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserMessageService } from './user-message.service';

@Injectable({
	providedIn: 'root'
})
export class FormService {
	formsDbKey = 'formsDb';

	private _formsDb$: BehaviorSubject<UserDetailsForm[]> = new BehaviorSubject<UserDetailsForm[]>([])
	formsDb$ = this._formsDb$.asObservable();

	constructor(
		private localStorageService: LocalStorageService,
		private userMessageService: UserMessageService) {
		this.mockData();
	}

	public async postUserDetailsForm(userDetailsForm: UserDetailsForm): Promise<void> {

		try {
			const forms = this.localStorageService.getItem<UserDetailsForm[]>(this.formsDbKey) || [];
			forms.push(userDetailsForm);
			this.localStorageService.setItem(this.formsDbKey, forms);
		}
		catch (error: any) {
			this.userMessageService.showMessage(error);
		}
	}

	public getAllFormsSync(): UserDetailsForm[] {
		const data = this.localStorageService.getItem<UserDetailsForm[]>(this.formsDbKey);
		return data || [];
	}

	public loadForms(): void {
		const forms = this.getAllFormsSync();
		this._formsDb$.next(forms);
	}

	public mockData() {
		// Define possible values for hobbies, motor types, countries, names, and birth years
		const hobbies = ['Reading', 'Traveling', 'Playing Video Games', 'Watching Movies', 'Listening to Music', 'Cooking', 'Exercising'];
		const motorTypes = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
		const countries = ['United States', 'Canada', 'Israel', 'Germany', 'Australia'];
		const names = ['John Doe', 'Jane Smith', 'Michael Johnson', 'Emily Davis', 'David Brown'];
		const birthYears = [1994, 2000, 2012, 1955, 1976];

		// Utility function to get a random element from an array
		function getRandomElement(array: any) {
			return array[Math.floor(Math.random() * array.length)];
		}

		// Utility function to get a random date in a specific year
		function getRandomDateInYear(year: any) {
			const start = new Date(year, 0, 1);
			const end = new Date(year + 1, 0, 1);
			return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
		}

		// Utility function to generate a random email
		function getRandomEmail(name: any) {
			const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
			const userName = name.split(' ').join('.').toLowerCase();
			return `${userName}@${getRandomElement(domains)}`;
		}

		// Function to generate a single user detail object
		function generateUserDetails() {
			const fullName = getRandomElement(names);
			const birthYear = getRandomElement(birthYears);

			return {
				fullName: fullName,
				gender: Math.random() > 0.5 ? 'Male' : 'Female',
				email: getRandomEmail(fullName),
				birthDate: getRandomDateInYear(birthYear).toISOString(),
				address: `Address ${Math.floor(Math.random() * 100)}`,
				city: `City ${Math.floor(Math.random() * 100)}`,
				country: getRandomElement(countries),
				hobbies: [getRandomElement(hobbies)],
				favoriteColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
				seats: Math.floor(Math.random() * 7) + 1,
				motorType: getRandomElement(motorTypes)
			};
		}

		// Function to generate 100 user details and store them in local storage
		function generateAndStoreUserDetails() {
			const userDetailsArray = [];
			for (let i = 0; i < 100; i++) {
				userDetailsArray.push(generateUserDetails());
			}
			localStorage.setItem('formsDb', JSON.stringify(userDetailsArray));
		}

		// Call the function to generate and store the user details
		generateAndStoreUserDetails();

	}
}
