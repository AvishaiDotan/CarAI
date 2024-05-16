import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable, map, interval } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
	selector: 'app-hero',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './app-hero.component.html',
	styleUrl: './app-hero.component.scss',
})
export class AppHeroComponent implements OnInit {
	intervalKey: any | undefined;

	imgUrls: string[] = [
		"../../../assets/images/app-hero-1.webp",
		"../../../assets/images/app-hero-2.webp",
		"../../../assets/images/app-hero-3.webp",
		"../../../assets/images/app-hero-4.webp",
		"../../../assets/images/app-hero-5.webp",
		"../../../assets/images/app-hero-6.webp",
		"../../../assets/images/app-hero-7.webp",
	];

	imgUrl$!: Observable<string>

	ngOnInit(): void {
		this.imgUrl$ = interval(5000).pipe(
			map(() => this.imgUrls[Math.floor(Math.random() * this.imgUrls.length)])
		  );
	}
}
