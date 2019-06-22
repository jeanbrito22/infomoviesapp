import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';


import { LayoutModule } from './layout/layout.module';
import { LoadingModule } from './loading/loading.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  exports: [ LayoutModule, LoadingModule ]
})
export class SharedModule { }
