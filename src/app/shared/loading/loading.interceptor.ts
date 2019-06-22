import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { LoadingService } from './loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //emite o metodo onStarted o evento antes da execução da requisição
        this.loadingService.onStarted(req);
        return next.handle(req)
                    .pipe(
                        // emite o metodo onFinished evento depois da execução da requisição
                        finalize ( 
                            () => this.loadingService.onFinished(req)
                        )
                    );
    }

}

