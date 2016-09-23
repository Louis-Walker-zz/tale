import { Component } from '@angular/core';

@Component({
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
        route: "dashboard",
        action: "createAppeal"
      },
      {
        name: "Appeals",
        route: "appeals",
        action: "createAppeal"
      },
      {
        name: "Leads",
        route: "leads",
        action: "createLead"
      },
      {
        name: "Users",
        route: "users",
        action: "inviteUser",
        admin: true
      }
    ]
  }
}

