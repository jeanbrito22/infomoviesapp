import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class PageNameService {

    private pageName: string = "";

    setData(pageName: string): void {
        this.pageName = pageName;
    }

    getData(): string {
        return this.pageName;
    }


}