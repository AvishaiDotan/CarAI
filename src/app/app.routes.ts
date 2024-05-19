import { Routes } from '@angular/router';

import { BuyerDetailsFormPageComponent } from './pages/buyer-details-form-page/buyer-details-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SubmissionSuccessPageComponent } from './pages/submission-success-page/submission-success-page.component';
import { AdminCenterComponent } from './pages/admin-center/admin-center.component';


export const routes: Routes = [
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "form",
        component: BuyerDetailsFormPageComponent
    },
    { 
        path: 'success/:userName/:email', 
        component: SubmissionSuccessPageComponent 
    },
    { 
        path: 'admin', 
        component: AdminCenterComponent 
    },
    {
        path: "**",
        redirectTo: ""
    }

];
