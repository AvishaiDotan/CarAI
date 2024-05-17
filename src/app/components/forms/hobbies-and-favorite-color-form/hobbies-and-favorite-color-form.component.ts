import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { ColorGithubModule } from 'ngx-color/github';
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
	],
	templateUrl: './hobbies-and-favorite-color-form.component.html',
	styleUrl: './hobbies-and-favorite-color-form.component.scss'
})
export class HobbiesAndFavoriteColorFormComponent {
	@Input() hobbiesAndFavoriteColorForm!: FormGroup;
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

    onSubmit() {
		if (this.hobbiesAndFavoriteColorForm && this.hobbiesAndFavoriteColorForm.valid) {
			console.log(this.hobbiesAndFavoriteColorForm.value);
		}
	}
}
