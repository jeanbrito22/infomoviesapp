import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, IonicModule, RouterModule
  ],
  exports: [ HeaderModule ]
})
export class LayoutModule { }
