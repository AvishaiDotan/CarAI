import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbar, MatToolbarRow, MatIcon, RouterLink, RouterLinkActive],
    templateUrl: './app-header.component.html',
    styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
    appIcon: string = "../../../assets/icons/car-ai-logo.png";
}
