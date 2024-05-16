import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule, MatButton } from '@angular/material/button'
import { CallToActionButtonComponent } from '../call-to-action-button/call-to-action-button.component';
@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [MatIconModule, MatDividerModule, MatButtonModule, MatButton, CallToActionButtonComponent],
	templateUrl: './app-footer.component.html',
	styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {
}
