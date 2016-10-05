import { Component } from '@angular/core';

@Component({
  selector: 'tale-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private extended: any = null;
  private auth: boolean = false;

  constructor() {
    setTimeout(() => {
      // this.toggleBool("auth");
    }, 1000);
  }

  toggleExtended(p) {
    this.extended = p;
  }

  toggleBool( slug ) {
    switch( slug ) {
      case "auth": this.auth = !this.auth; break;
    }
  }
}
