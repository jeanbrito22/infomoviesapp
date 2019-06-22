import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LoadingInterceptor } from './loading.interceptor'
import { LoadingService } from './loading.service'
import { InfoMoviesSpinnerComponent } from './info-movies-spinner/info-movies-spinner.component'

@NgModule({
    declarations: [ InfoMoviesSpinnerComponent ],
    imports: [ CommonModule, IonicModule ],
    providers: [
        LoadingService,
        {
            provide: HTTP_INTERCEPTORS,
            useFactory: (service: LoadingService) => new LoadingInterceptor(service),
            multi: true,
            deps: [ LoadingService ]
        }
    ],
    exports: [ InfoMoviesSpinnerComponent ]
})

export class LoadingModule {}