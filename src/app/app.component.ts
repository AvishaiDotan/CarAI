import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CarAIHttpClientService } from './services/car-aihttp-client.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
	selector: 'app-root',
	standalone: true,
	providers: [HttpClient, CarAIHttpClientService],
	imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent, SpinnerComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'CarAI';
}
