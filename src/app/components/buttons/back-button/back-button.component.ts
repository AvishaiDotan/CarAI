import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
	selector: 'back-button',
	standalone: true,
	imports: [
		MatIconModule,
		MatIcon,
		CommonModule,
	],
	templateUrl: './back-button.component.html',
	styleUrl: './back-button.component.scss'
})
export class BackButtonComponent {

	@Input() path: string = '/';
	@Input() isCancelAction: boolean = false;

	@Output() onCancel: EventEmitter<void> = new EventEmitter<void>();
	constructor(private router: Router) { }

	getBack() {
		this.router.navigate([this.path]);
	}


}
