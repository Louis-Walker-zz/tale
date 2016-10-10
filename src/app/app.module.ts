// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Mock API
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }  from './shared/mockData/mock-potentials';

// Soft Modules
import { TaleRoutingModule }  from './app-routing.module';

// Root Component
import { AppComponent } from './app.component';

// Login Module
import { LoginModule } from './login/login.module';

// View Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { AppealsModule } from './appeals/appeals.module';
import { LeadsModule } from './leads/leads.module';
import { UsersModule } from './users/users.module';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './shared/firebase-config';
import { firebaseAuthConfig } from './shared/firebase-auth-config';

@NgModule({
  imports: [ 
    // Angular Modules
    BrowserModule, 
    FormsModule, 

    // Soft Modules
    TaleRoutingModule, 

    // Login Module
    LoginModule,

    // Views
    DashboardModule,
    AppealsModule,
    LeadsModule,
    UsersModule,

    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],

  declarations: [ 
    // Root component
    AppComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }