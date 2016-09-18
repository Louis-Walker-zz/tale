import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProfileComponent } from './tale-profile/';
import { NavComponent } from './tale-nav/';
import { CreateAppealComponent } from './tale-create-appeal/';
import { PotentialsComponent } from './tale-potentials/';
import { PotentialsFilterComponent } from './tale-potentials/tale-potentials-filter';

import { MapToIterablePipe } from './shared/pipes/map-to-iterable.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, ProfileComponent, NavComponent, CreateAppealComponent, PotentialsComponent, PotentialsFilterComponent,
    MapToIterablePipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }