import { Component } from '@angular/core';

@Component({
  selector: 'tale-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private extended: any = null;

  toggleExtended(p) {
    this.extended = p;
  }
}
