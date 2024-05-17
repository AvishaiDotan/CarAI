import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common';

@Component({
	selector: 'form-pagination-button',
	standalone: true,
	imports: [
		MatIconModule,
		MatIcon,
		MatButtonModule,
		CommonModule
	],
	templateUrl: './form-pagination-button.component.html',
	styleUrl: './form-pagination-button.component.scss'
})
export class FormPaginationButtonComponent {
	@Input() icon!: string;
}
