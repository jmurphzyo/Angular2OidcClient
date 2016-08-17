import { Routes, provideRouter, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }

];


export const routing = RouterModule.forRoot(appRoutes);

