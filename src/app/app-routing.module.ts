import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { AuthGuardService } from './shared/services/auth-guard.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppealsComponent } from './appeals/appeals.component';
import { LeadsComponent } from './leads/leads.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { 
        path: "",
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { 
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [
            AuthGuardService
        ]
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

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService, AngularFire ]
})
export class TaleRoutingModule { 
}  