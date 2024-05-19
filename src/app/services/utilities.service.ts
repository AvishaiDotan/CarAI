import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class UtilitiesService {

	constructor() { }

	formatTimestampToDate(timestamp: any) {
		const date = new Date(timestamp);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();

		return `${day}/${month}/${year}`;
	}

	getBirthDateWithMostOccurrences(objects: any[]) {
		const occurrenceMap: any = {};
		let maxOccurrences = 0;
		let mostFrequentBirthDate = '';
	
		objects.forEach(obj => {
			const formattedDate = this.formatTimestampToDate(obj.birthDate);
			if (occurrenceMap[formattedDate]) {
				occurrenceMap[formattedDate] += 1;
			} else {
				occurrenceMap[formattedDate] = 1;
			}
	
			if (occurrenceMap[formattedDate] > maxOccurrences) {
				maxOccurrences = occurrenceMap[formattedDate];
				mostFrequentBirthDate = formattedDate;
			}
		});
	
		return mostFrequentBirthDate;
	}

	getCountryWithMostOccurrences(objects: any[]) {
		const occurrenceMap: any = {};
		let maxOccurrences = 0;
		let mostFrequentCountry = '';
	
		objects.forEach(obj => {
			const country = obj.country;
			if (occurrenceMap[country]) {
				occurrenceMap[country] += 1;
			} else {
				occurrenceMap[country] = 1;
			}
	
			if (occurrenceMap[country] > maxOccurrences) {
				maxOccurrences = occurrenceMap[country];
				mostFrequentCountry = country;
			}
		});
	
		return mostFrequentCountry;
	}

}
