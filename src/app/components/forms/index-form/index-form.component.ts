import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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

	validForms: FormEnum[] = [];

	personalDetailsform!: FormGroup;
	locationDetailsForm!: FormGroup;
	hobbiesAndFavoriteColorForm!: FormGroup;
	carDetailsForm!: FormGroup;

	@ViewChild(PersonalDetailsFormComponent) personalDetailsFormComponent!: PersonalDetailsFormComponent;
	@ViewChild(LocationFormComponent) locationFormComponent!: LocationFormComponent;
	@ViewChild(HobbiesAndFavoriteColorFormComponent) HobbiesAndFavoriteColorFormComponent!: HobbiesAndFavoriteColorFormComponent;
	@ViewChild(CarDetailsFormComponent) carDetailsFormComponent!: CarDetailsFormComponent;
	
	currFormIdx$!: Observable<number>
	_currFormIdx$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
	activeForm: FormEnum | null = null;
	

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
			motorType: ['Petrol', Validators.required]
		});

		this.currFormIdx$ = this._currFormIdx$.asObservable();
		this.currFormIdx$.subscribe((idx) => {
			this.activeForm = this.forms[idx];
		})
	}

	goNextForm() {
		const currStep = this._currFormIdx$.value;
		const maxStep = this.forms.length - 1;
		const nextStep = currStep + 1;
		if (currStep < maxStep) {
			this._currFormIdx$.next(nextStep);
		}
	}

	goPrevForm() {
		const currStep = this._currFormIdx$.value;
		const minStep = 0;
		const prevStep = currStep - 1;
		if (currStep > minStep) {
			this._currFormIdx$.next(prevStep);
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

	
	formValidationChange(isValid: boolean, form: FormEnum) {
		if (isValid) {
			if (!this.validForms.some(f => f === form)) {
				this.validForms.push(form);
			}
		} else {
			this.validForms = this.validForms.filter(f => f !== form);
		}
	}
	
	focusOnInvalidField() {
		var currForm = this.activeForm;
		switch (currForm) {
			case FormEnum.personalDetailsForm:
				this.personalDetailsFormComponent.focusOnInvalidField();
				break;
			case FormEnum.locationFrom:
				this.locationFormComponent.focusOnInvalidField();
				break;
			case FormEnum.hobbiesAndFavoriteColorForm:
				this.HobbiesAndFavoriteColorFormComponent.focusOnInvalidField();
				break;
			case FormEnum.carDetailsForm:
				this.carDetailsFormComponent.focusOnInvalidField();
				break;
		}
	}

	get isValidForm() {
		const currForm = this.activeForm;
		return (this.validForms.length > 0 && this.validForms.some(f => f === currForm))
	}
}
