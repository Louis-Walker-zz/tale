import { Component } from '@angular/core';
import { ProfileComponent } from './tale-profile/tale-profile.component.ts';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ProfileComponent, NavComponent, CreateAppealComponent, FeedComponent]
})
export class AppComponent {
  title = 'app works!';
}
