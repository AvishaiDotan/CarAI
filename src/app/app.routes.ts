import { Routes } from '@angular/router';

import { BuyerDetailsFormPageComponent } from './pages/buyer-details-form-page/buyer-details-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


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
