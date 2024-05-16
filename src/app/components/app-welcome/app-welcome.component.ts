import { Component, EventEmitter, Output, output } from '@angular/core';
import { CallToActionButtonComponent } from '../call-to-action-button/call-to-action-button.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CallToActionButtonComponent],
  templateUrl: './app-welcome.component.html',
  styleUrl: './app-welcome.component.scss'
})
export class AppWelcomeComponent {
  @Output() onOpenForm: EventEmitter<void> = new EventEmitter<void>();
}
