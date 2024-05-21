import { Injectable } from '@angular/core';
import { GraphDataItem, PolarGraphItem, UserDetailsForm } from '../models';

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

		return maxOccurrences;
	}

	// getCountryWithMostOccurrences(objects: any[]) {
	// 	const occurrenceMap: any = {};
	// 	let maxOccurrences = 0;
	// 	let mostFrequentCountry = '';

	// 	objects.forEach(obj => {
	// 		const country = obj.country;
	// 		if (occurrenceMap[country]) {
	// 			occurrenceMap[country] += 1;
	// 		} else {
	// 			occurrenceMap[country] = 1;
	// 		}

	// 		if (occurrenceMap[country] > maxOccurrences) {
	// 			maxOccurrences = occurrenceMap[country];
	// 			mostFrequentCountry = country;
	// 		}
	// 	});

	// 	return mostFrequentCountry;
	// }

	getSumGenderCounts(objects: any[]): GraphDataItem[] {
		const genderCounts = objects.reduce((acc, obj) => {
			if (obj.gender) {
				const gender = obj.gender;
				if (!acc[gender]) {
					acc[gender] = 0;
				}
				acc[gender]++;
			}
			return acc;
		}, {});

		return Object.keys(genderCounts).map(gender => ({
			name: gender,
			value: genderCounts[gender]
		}));
	}

	getSumAgeCounts(objects: any[]): GraphDataItem[] {
		const genderCounts = objects.reduce((acc, obj) => {
			if (obj.birthDate) {
				const birthDate = obj.birthDate;
				const age = this.parseAge(birthDate);

				if (!acc[age]) {
					acc[age] = 0;
				}
				acc[age]++;
			}
			return acc;
		}, {});

		return Object.keys(genderCounts).map(age => ({
			name: age,
			value: genderCounts[age]
		}));
	}

	getSumSeatsCounts(objects: any[]): GraphDataItem[] {
		const seatsCount = objects.reduce((acc, obj) => {
			if (obj.seats) {
				const seats = obj.seats;

				if (!acc[seats]) {
					acc[seats] = 0;
				}
				acc[seats]++;
			}
			return acc;
		}, {});

		return Object.keys(seatsCount).map(seat => ({
			name: seat,
			value: seatsCount[seat]
		}));
	}

	getSumCountryCounts(objects: any[]): GraphDataItem[] {
		const genderCounts = objects.reduce((acc, obj) => {
			if (obj.country) {
				const country = obj.country;

				if (!acc[country]) {
					acc[country] = 0;
				}
				acc[country]++;
			}
			return acc;
		}, {});

		return Object.keys(genderCounts).map(country => ({
			name: country,
			value: genderCounts[country]
		}));
	}

	getSumMotorTypeCounts(objects: any[]): GraphDataItem[] {
		const motorTypes = objects.reduce((acc, obj) => {
			if (obj.motorType) {
				const motorType = obj.motorType;

				if (!acc[motorType]) {
					acc[motorType] = 0;
				}
				acc[motorType]++;
			}
			return acc;
		}, {});

		return Object.keys(motorTypes).map(motorType => ({
			name: motorType,
			value: motorTypes[motorType]
		}));
	}



	getPolarGraphData(dataList: UserDetailsForm[]): PolarGraphItem[] {
		const items: PolarGraphItem[] = [];
		dataList.forEach(d => {
			d.hobbies.forEach(h => {
				if (!items.some(i => i.name === h)) {
					items.push({
						name: h,
						series: []
					})
				}
			})
		})

		items.forEach(i => {
			const iName = i.name;
			var countries = dataList.reduce<string[]>((acc, item) => {
				if (item.hobbies.some(h => h === iName) && !acc.includes(iName)) {
					acc.push(item.country);
				}
				return acc;
			}, []);
			i.series = countries.map(c => ({
				name: c,
				value: 0
			}))
		})

		items.forEach(i => {
			const iName = i.name;
			i.series.forEach(s => {
				var ageSum = dataList.reduce<number>((acc, item) => {
					if (item.hobbies.some(h => h === iName) && item.country === s.name) {
						acc += item.seats
					}
					return acc;
				}, 0);
				s.value = ageSum;
			})
		})

		return items;
	}





	parseAge(timestamp: number): number {
			const dateOfBirth = new Date(timestamp);
			const currentDate = new Date();

			let age = currentDate.getFullYear() - dateOfBirth.getFullYear();

			const monthDifference = currentDate.getMonth() - dateOfBirth.getMonth();
			const dayDifference = currentDate.getDate() - dateOfBirth.getDate();

			if(monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
			age--;
		}

		return age;
	}



}


