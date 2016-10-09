// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Feature Modules
import { CreateAppealModule } from './tale-create-appeal';
import { PotentialFeedModule } from './potential-feed';
import { TaleMenuModule } from '../shared/modules/tale-menu/tale-menu.module';

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
        PotentialModule,
        TaleMenuModule
    ],

    declarations: [ 
        DashboardComponent
    ],

    exports: [ 
        DashboardComponent
    ]
})
export class DashboardModule { }