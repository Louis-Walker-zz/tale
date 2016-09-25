// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Mock API
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './shared/mockData/mock-potentials';

// Soft Modules
import { Routing }  from './app.routing';

// Root Component
import { AppComponent } from './app.component';

// View Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { AppealsModule } from './appeals/appeals.module';
import { LeadsModule } from './leads/leads.module';
import { UsersModule } from './users/users.module';

// Feature Modules
import { TaleMenuModule } from './shared/modules/tale-menu/tale-menu.module';

@NgModule({
  imports: [ 
    // Angular Modules
    BrowserModule, 
    FormsModule, 

    // Soft Modules
    Routing, 
    InMemoryWebApiModule.forRoot(InMemoryDataService),

    // Views
    DashboardModule,
    AppealsModule,
    LeadsModule,
    UsersModule,

    // Feature Modules
    TaleMenuModule
  ],

  declarations: [ 
    // Root component
    AppComponent
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }