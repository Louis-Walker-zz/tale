// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Components
import { TaleMenuComponent } from './';
import { ProfileComponent } from './tale-profile';
import { NavComponent } from './tale-nav';

// Pipes
import { TalePipesModule } from '../../../shared/pipes/tale-pipes.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        RouterModule,
        TalePipesModule
    ],

    declarations: [ 
        // Components
        TaleMenuComponent,
        ProfileComponent,
        NavComponent
    ],

    exports: [ 
        // Components
        TaleMenuComponent,
        ProfileComponent,
        NavComponent
    ]
})
export class TaleMenuModule { }