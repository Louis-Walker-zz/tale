// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Feature Modules
import { PotentialModule } from '../../shared/modules/potential/potential.module';
import { OpenAppealModule } from './open-appeal';

// Components
import { PotentialFeedComponent } from './potential-feed.component';
import { PotentialFilterComponent } from './shared/tale-potential-filter';

// Pipes
import { TalePipesModule } from '../../shared/pipes/tale-pipes.module';
import { FilterPipe } from './shared/filter.pipe';

import { Ng2Webstorage } from 'ng2-webstorage';

import { AngularFireModule } from 'angularfire2';

import { firebaseConfig } from '../../shared/firebase-config';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        HttpModule,
        TalePipesModule,
        PotentialModule,
        OpenAppealModule,
        AngularFireModule.initializeApp(firebaseConfig)
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