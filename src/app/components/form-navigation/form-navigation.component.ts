import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormPaginationButtonComponent } from '../buttons/form-pagination-button/form-pagination-button.component';
import { CommonModule } from '@angular/common';
import { FormEnum, PaginationEnum } from '../../models';

@Component({
	selector: 'form-navigation',
	standalone: true,
	imports: [FormPaginationButtonComponent, CommonModule],
	templateUrl: './form-navigation.component.html',
	styleUrl: './form-navigation.component.scss'
})
export class FormNavigationComponent {
	@Input() currPage: number | null = null;
	@Input() lastPage: number | null = null;

	@Input() isValidForm: boolean = false;
	@Output() OnPaginate: EventEmitter<PaginationEnum> = new EventEmitter<PaginationEnum>();
	@Output() OnFocusOnInvalidField: EventEmitter<void> = new EventEmitter<void>();
	get buttonsLayoutClass(): string {
		// Case 1: When the user is in the first page
		// Attach the next button to the right side of the container 
		if (this.currPage === 0 && this.lastPage && this.lastPage > 0) 
			return 'justify-content-end';
		// Case 2: When the user is in the middle of pagination
		// space-between will align the buttons to the left and right side of the container
		else if (this.currPage !== 0 && this.lastPage && this.lastPage > 0)
			return 'justify-content-between';
		else
			return '';
	}

	goBack() {
		this.OnPaginate.emit(PaginationEnum.Prev);
	}

	goNext() {
		(this.isValidForm) ? this.OnPaginate.emit(PaginationEnum.Next) : this.OnFocusOnInvalidField.emit();
	}

	submit() {
		(this.isValidForm) ? this.OnPaginate.emit(PaginationEnum.Submit) : this.OnFocusOnInvalidField.emit();
	}
}
