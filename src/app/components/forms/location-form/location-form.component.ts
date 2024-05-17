import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'location-form',
    standalone: true,
    imports: [
        MatFormFieldModule, 
        MatError,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    templateUrl: './location-form.component.html',
    styleUrl: './location-form.component.scss'
})
export class LocationFormComponent {
    @Input() locationFrom!: FormGroup;

    onSubmit() {
		if (this.locationFrom && this.locationFrom.valid) {
			console.log(this.locationFrom.value);
		}
	}
}
