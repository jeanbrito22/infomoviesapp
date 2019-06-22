import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'im-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent {

  constructor(private _location: Location, private route: Router) { }

  isHome() {
    return this.route.url === "/home" || this.route.url === "/";
  }

  returnToPreviousPage() {
    this._location.back();
  }

}
