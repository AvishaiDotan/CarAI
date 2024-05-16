import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'call-to-action-button',
	standalone: true,
	imports: [],
	templateUrl: './call-to-action-button.component.html',
	styleUrl: './call-to-action-button.component.scss'
})
export class CallToActionButtonComponent {
	@Input() inlineText: string = "";
	@Output() OnClick: EventEmitter<any> = new EventEmitter<any>();
}
