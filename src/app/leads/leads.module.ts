// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LeadsComponent } from './';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule 
    ],

    declarations: [ 
        LeadsComponent 
    ],

    exports: [ 
        LeadsComponent
    ]
})
export class LeadsModule { }