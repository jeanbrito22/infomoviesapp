import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header.component';
import { BackButtonComponent } from './back-button/back-button.component';


@NgModule({
  declarations: [ HeaderComponent, BackButtonComponent ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [ HeaderComponent, BackButtonComponent ]
})
export class HeaderModule { }
