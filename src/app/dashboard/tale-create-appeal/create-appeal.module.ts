// Angular Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CreateAppealComponent } from './tale-create-appeal.component';

@NgModule({
    imports: [ 
        BrowserModule, 
        FormsModule 
    ],

    declarations: [ 
        CreateAppealComponent 
    ],

    exports: [ 
        CreateAppealComponent
    ]
})
export class CreateAppealModule { }