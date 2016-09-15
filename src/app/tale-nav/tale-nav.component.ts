import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tale-nav',
  templateUrl: 'tale-nav.component.html',
  styleUrls: ['tale-nav.component.css']
})
export class NavComponent {
  taleNav: Object;

  constructor() { 
    // Temp CFG
    this.taleNav = [
      {
        name: "Dashboard",
        permalink: "dashboard",
        action: "createAppeal"
      },
      {
        name: "Appeals",
        permalink: "appeals",
        action: "createAppeal"
      },
      {
        name: "Leads",
        permalink: "leads",
        action: "createLead"
      },
      {
        name: "Users",
        permalink: "users",
        action: "inviteUser",
        admin: true
      }
    ]
  }

  linkify(permalink): string {
    return "http://" + window.location.hostname + ":" + window.location.port + "/" + permalink;
  }
}
