import { Routes } from '@angular/router';
import { AppHeroComponent } from './components/app-hero/app-hero.component';
import { BuyerDetailsFormPageComponent } from './pages/buyer-details-form-page/buyer-details-form-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "form",
        component: BuyerDetailsFormPageComponent
    }
];
