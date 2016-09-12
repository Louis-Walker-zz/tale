import { Component } from '@angular/core';
import { MapToIterablePipe } from '../pipes/map-to-iterable.pipe';

@Component({
  moduleId: module.id,
  selector: 'tale-profile',
  templateUrl: 'tale-profile.component.html',
  styleUrls: ['tale-profile.component.css'],
  pipes: [MapToIterablePipe]
})
export class ProfileComponent {
  profile: Object;
  tests: string[];

  constructor() {
    this.profile = {
        "username": "Louis Walker",
        "pictureURL": "../placeholder.png",
        "role": "Administrator",
        "stats": {
            "open": 7,
            "completed": 9,
            "reunited": 6
        }
    };
  }
}
