import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppealsComponent } from './appeals/appeals.component';
import { LeadsComponent } from './leads/leads.component';
import { UsersComponent } from './users/users.component';

const taleRoutes: Routes = [
    { 
        path: "",
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { 
        path: "dashboard",
        component: DashboardComponent
    },
    { 
        path: "appeals",
        component: AppealsComponent
    },
    { 
        path: "leads",
        component: LeadsComponent
    },
    { 
        path: "users",
        component: UsersComponent
    }
]

export const Routing: ModuleWithProviders = RouterModule.forRoot(taleRoutes);