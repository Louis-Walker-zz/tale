// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Feature Modules
import { CreateAppealModule } from './tale-create-appeal';
import { PotentialFeedModule } from './potential-feed';

// Local Components
import { DashboardComponent } from './';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        
        // Feature Modules
        CreateAppealModule,
        PotentialFeedModule
    ],

    declarations: [ 
        DashboardComponent
    ],

    exports: [ 
        DashboardComponent
    ]
})
export class DashboardModule { }