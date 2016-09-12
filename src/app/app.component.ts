import { Component } from '@angular/core';
import { ProfileComponent } from './tale-profile/';
import { NavComponent } from './tale-nav/';
import { CreateAppealComponent } from './tale-create-appeal/';
import { PotentialsComponent } from './tale-potentials/';

@Component({
  moduleId: module.id,
  selector: 'tale-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProfileComponent, NavComponent, CreateAppealComponent, PotentialsComponent]
})
export class AppComponent {
}
