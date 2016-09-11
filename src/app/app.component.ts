import { Component } from '@angular/core';
import { ProfileComponent } from './tale-profile/';
import { NavComponent } from './tale-nav/';
import { CreateAppealComponent } from './tale-create-appeal/';
import { PotentialsComponent } from './tale-potentials/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProfileComponent, NavComponent, CreateAppealComponent, PotentialsComponent]
})
export class AppComponent {
  title: string = 'app works!';
}
