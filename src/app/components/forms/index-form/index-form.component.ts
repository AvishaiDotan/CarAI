import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule, MatError } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { PersonalDetailsFormComponent } from '../personal-details-form/personal-details-form.component';
import { FormValidationService } from '../../../services/form-validation.service';
import { LocationFormComponent } from '../location-form/location-form.component';
import { FormEnum, PaginationEnum } from '../../../models';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormNavigationComponent } from '../../form-navigation/form-navigation.component';
import { HobbiesAndFavoriteColorFormComponent } from '../hobbies-and-favorite-color-form/hobbies-and-favorite-color-form.component';
import { CarDetailsFormComponent } from '../car-details-form/car-details-form.component';


@Component({
	selector: 'index-form',
	standalone: true,
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		PersonalDetailsFormComponent,
		LocationFormComponent,
		CommonModule,
		FormNavigationComponent,
		HobbiesAndFavoriteColorFormComponent,
		CarDetailsFormComponent
	],
	templateUrl: './index-form.component.html',
	styleUrl: './index-form.component.scss'
})
export class IndexForm implements OnInit {
	forms: FormEnum[] = [
		FormEnum.personalDetailsForm,
		FormEnum.locationFrom,
		FormEnum.hobbiesAndFavoriteColorForm,
		FormEnum.carDetailsForm
	]

	personalDetailsform!: FormGroup;
	locationDetailsForm!: FormGroup;
	hobbiesAndFavoriteColorForm!: FormGroup;
	carDetailsForm!: FormGroup;

	currForm$!: Observable<number>
	_currForm$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.personalDetailsform = this.fb.group({
			fullName: ['', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(10),
				Validators.pattern(/^[a-zA-Z ]*$/),
				FormValidationService.noNumbersValidator
			]],
			gender: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			birthDate: ['', [FormValidationService.validDateValidator, Validators.required]],
		});

		this.locationDetailsForm = this.fb.group({
			address: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
			city: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
			country: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
		});

		this.hobbiesAndFavoriteColorForm = this.fb.group({
			hobbies: [[], Validators.required],
			favoriteColor: ['red', Validators.required],
		})

		this.carDetailsForm = this.fb.group({
			seats: [null, Validators.required],
			motorType: ['', Validators.required]
		});

		this.currForm$ = this._currForm$.asObservable();
	}

	goNextForm() {
		const currStep = this._currForm$.value;
		const maxStep = this.forms.length - 1;
		const nextStep = currStep + 1;
		if (currStep < maxStep) {
			this._currForm$.next(nextStep);
		}
	}

	goPrevForm() {
		const currStep = this._currForm$.value;
		const minStep = 0;
		const prevStep = currStep - 1;
		if (currStep > minStep) {
			this._currForm$.next(prevStep);
		}
	}

	paginate(paginationAction: PaginationEnum) {
		switch (paginationAction) {
			case PaginationEnum.Prev:
				this.goPrevForm();
				break;
			case PaginationEnum.Next:
				this.goNextForm();
				break;
			case PaginationEnum.Submit:
				console.log('Submitting form');
				break;
		}
	}
}
