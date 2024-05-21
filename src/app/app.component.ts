import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Subscription, filter } from 'rxjs';
import { AdminCenterService } from './services/admin-center.service';

@Component({
	selector: 'app-root',
	standalone: true,
	providers: [HttpClient],
	imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent, SpinnerComponent, CommonModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
	title = 'CarAI';
	pageClass: string = '';
	routeSubscription!: Subscription;

	constructor(private router: Router, private adminCenterService: AdminCenterService) {

	}

	ngOnInit(): void {
		this.routeSubscription = this.router.events.pipe(
			filter(event => event instanceof NavigationEnd)
		).subscribe({
			next: (event) => {
				var route = (event as NavigationEnd).urlAfterRedirects.slice(1, (event as NavigationEnd).urlAfterRedirects.length);
				this.pageClass = route + '-page';
			}
		});
		this.adminCenterService.incrementVisitorCounter();
	}

	ngOnDestroy(): void {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
}
