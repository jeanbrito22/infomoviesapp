import { Injectable, EventEmitter } from "@angular/core";
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class LoadingService {

    onLoadingChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    // armazena todas as requisições ativas atuais

    private requests: HttpRequest<any>[] = [];

    private notify() {
        let requestStatus = this.requests.length !== 0;
        this.onLoadingChanged.emit(requestStatus);
    }
    
    onStarted(req: HttpRequest<any>) {
        this.requests.push(req);
        this.notify();
    }

    onFinished(req: HttpRequest<any>) {
        const index = this.requests.indexOf(req);
        if (index !== -1) {
            this.requests.splice(index, 1);
        }
        this.notify();
    }

}