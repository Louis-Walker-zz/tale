// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LeadsComponent } from './';

import { TaleMenuModule } from '../shared/modules/tale-menu/tale-menu.module';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule,
        TaleMenuModule 
    ],

    declarations: [ 
        LeadsComponent 
    ],

    exports: [ 
        LeadsComponent
    ]
})
export class LeadsModule { }