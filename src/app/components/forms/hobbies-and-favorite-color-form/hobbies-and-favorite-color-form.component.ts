import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { ColorGithubModule } from 'ngx-color/github';
import { ColorCircleModule } from 'ngx-color/circle';
import { FormValidationChangeDirective } from '../../../directives/form-validation-change.directive';
import { Hobbie } from '../../../models';
@Component({
	selector: 'hobbies-and-favorite-color-form',
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
		ColorGithubModule,
		FormValidationChangeDirective,
		ColorCircleModule
	],
	templateUrl: './hobbies-and-favorite-color-form.component.html',
	styleUrl: './hobbies-and-favorite-color-form.component.scss'
})
export class HobbiesAndFavoriteColorFormComponent {
	@Input() hobbiesAndFavoriteColorForm!: FormGroup;
	@Output() onFormValidationChange = new EventEmitter<boolean>();
	color = '#DB3E00ff';
	colors = [
		"#DB3E00ff", // Syracuse Red Orange
		"#B80000ff", // Engineering Orange
		"#B0171F", // indian red
		"#DC143C", // crimson
		"#FFB6C1", // lightpink
		"#FFAEB9", // lightpink 1
		"#EEA2AD", // lightpink 2
		"#CD8C95", // lightpink 3
		"#CB8F90ff", // Rosy Brown
		"#FFC0CB", // pink
		"#FFB5C5", // pink 1
		"#EEA9B8", // pink 2
		"#C4DEF6ff",  // Columbia Blue
		"#BED3F3ff", // Powder Blue
		"#D4C4FBff", // Periwinkle
		"#C1E1C5ff", // Tea Green
		"#FAD0C3ff", // Pale Dogwood
		"#BEDADCff", // Light Blue
		"#FEF3BDff", // Lemon Chiffon
		"#8B5F65", // lightpink 4
		"#1273DEff", // Celtic Blue
		"#006B76ff", // Caribbean Current
		"#5300EBff", // Chrysler Blue
		"#004DCFff", // Sapphire
		"#008A02ff", // India Green
		"#FCCB00ff", // Jonquil
		'#FF6633', '#FFB399', '#FF33FF', '#FFFF99',
	  ];

	hobbies: Hobbie[] = [
		'Reading',
		'Traveling',
		'Playing Video Games',
		'Watching Movies',
		'Listening to Music',
		'Cooking',
		'Exercising',
	]

	focusOnInvalidField() {
		for (const key of Object.keys(this.hobbiesAndFavoriteColorForm.controls)) {
			const control = this.hobbiesAndFavoriteColorForm.get(key);
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
