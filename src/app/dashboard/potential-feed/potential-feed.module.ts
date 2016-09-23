// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { PotentialFeedComponent } from './potential-feed.component';
import { PotentialFilterComponent } from './tale-potential-filter';

// Pipes
import { TalePipesModule } from '../../shared/pipes/tale-pipes.module';
import { FilterRegionPipe } from './shared/filter-region.pipe';
import { FilterOrderPipe } from './shared/filter-order.pipe';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        TalePipesModule
    ],

    declarations: [ 
        // Components
        PotentialFeedComponent,
        PotentialFilterComponent,

        // Pipes
        FilterRegionPipe,
        FilterOrderPipe
    ],

    exports: [ 
        PotentialFeedComponent,
        PotentialFilterComponent
    ]
})
export class PotentialFeedModule { }