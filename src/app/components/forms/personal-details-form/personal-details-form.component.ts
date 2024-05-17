import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';


@Component({
	selector: 'personal-details-form',
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
		MatNativeDateModule,
		],
	templateUrl: './personal-details-form.component.html',
	styleUrl: './personal-details-form.component.scss'
})
export class PersonalDetailsFormComponent {
	@Input() personalDetailsFrom!: FormGroup;
	genders: string[] = [
		"Male",
		'Female',
	]

	onSubmit() {
		if (this.personalDetailsFrom && this.personalDetailsFrom.valid) {
			console.log(this.personalDetailsFrom.value);
		}
	}

}
