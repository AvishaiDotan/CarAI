import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { ColorGithubModule } from 'ngx-color/github';
import { FormValidationChangeDirective } from '../../../directives/form-validation-change.directive';
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
		FormValidationChangeDirective
	],
	templateUrl: './hobbies-and-favorite-color-form.component.html',
	styleUrl: './hobbies-and-favorite-color-form.component.scss'
})
export class HobbiesAndFavoriteColorFormComponent {
	@Input() hobbiesAndFavoriteColorForm!: FormGroup;
	@Output() onFormValidationChange = new EventEmitter<boolean>();
	color = 'red';
	// colors = [
	// 	"Red",
	// 	"Blue",
	// 	"Green",
	// 	"Yellow",
	// 	"Orange",
	// 	"Purple",
	// 	"Pink",
	// 	"Brown",
	// 	"Black",
	// 	"White",
	// 	"Gray",
	// 	"Cyan",
	// 	"Magenta",
	// 	"Lime",
	// 	"Maroon",
	// 	"Navy",
	// 	"Olive",
	// 	"Teal",
	// 	"Aqua",
	// 	"Fuchsia",
	// 	"Silver",
	// 	"Gold",
	// 	"Indigo",
	// 	"Violet",
	// 	"Coral",
	// 	"Crimson",
	// 	"DarkBlue",
	// 	"DarkGreen",
	// 	"DarkRed",
	// 	"LightGray"
	//   ];

	hobbies: string[] = [
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
