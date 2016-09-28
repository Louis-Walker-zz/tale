// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Feature Modules
import { CreateAppealModule } from './tale-create-appeal';
import { PotentialFeedModule } from './potential-feed';

// Local Components
import { DashboardComponent } from './';
import { PotentialModule } from '../shared/modules/potential';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        
        // Feature Modules
        CreateAppealModule,
        PotentialFeedModule,
        PotentialModule
    ],

    declarations: [ 
        DashboardComponent
    ],

    exports: [ 
        DashboardComponent
    ]
})
export class DashboardModule { }