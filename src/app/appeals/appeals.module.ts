// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppealsComponent } from './';

import { TaleMenuModule } from '../shared/modules/tale-menu/tale-menu.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        TaleMenuModule
    ],

    declarations: [ 
        AppealsComponent 
    ],

    exports: [ 
        AppealsComponent
    ]
})
export class AppealsModule { }