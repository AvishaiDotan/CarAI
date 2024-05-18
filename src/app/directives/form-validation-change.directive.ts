import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroupDirective, NgForm } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Directive({
	selector: '[formValidationChange]',
	providers: [NgForm],
	standalone: true
})
export class FormValidationChangeDirective implements OnInit, OnDestroy{
	@Output() onFormValidationChange = new EventEmitter<boolean>();

	private subscription!: Subscription;

	constructor(private formGroupDirective: FormGroupDirective) { 
	}

	ngOnInit(): void {
		this.subscription = this.formGroupDirective.form.valueChanges
			.pipe(debounceTime(500))
			.subscribe(() => {
				this.onFormValidationChange.emit(this?.formGroupDirective?.valid || false);
			});
	}

	ngOnDestroy(): void {
		if (this.subscription) {
			this.subscription.unsubscribe();
		}
	}
}
