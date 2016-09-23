// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppealsComponent } from './';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule 
    ],

    declarations: [ 
        AppealsComponent 
    ],

    exports: [ 
        AppealsComponent
    ]
})
export class AppealsModule { }