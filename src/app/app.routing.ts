import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { UnauthorizedComponent } from './unauthorized/';
import { ProtectedComponent } from './protected/protected.component';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'unauthorized',
        component: UnauthorizedComponent
    },
    {
        path: 'protected',
        component: ProtectedComponent,
        canActivate:[AuthGuardService]
    }

];
export const authProviders = [
    AuthGuardService,
    AuthService
];

export const routing = RouterModule.forRoot(appRoutes);

