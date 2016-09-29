// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Feature Modules
import { PotentialModule } from '../../shared/modules/potential/potential.module';

// Components
import { PotentialFeedComponent } from './potential-feed.component';
import { PotentialFilterComponent } from './shared/tale-potential-filter';

// Pipes
import { TalePipesModule } from '../../shared/pipes/tale-pipes.module';
import { FilterPipe } from './shared/filter.pipe';

import { Ng2Webstorage } from 'ng2-webstorage';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        TalePipesModule,
        PotentialModule
    ],

    declarations: [ 
        // Components
        PotentialFeedComponent,
        PotentialFilterComponent,

        // Pipes
        FilterPipe
    ],

    exports: [ 
        PotentialFeedComponent,
        PotentialFilterComponent
    ]
})
export class PotentialFeedModule { }