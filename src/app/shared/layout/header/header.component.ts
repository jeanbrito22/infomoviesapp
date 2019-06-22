import { Component, AfterContentChecked } from '@angular/core';
import { PageNameService } from '../../services/page-name.service';

@Component({
    selector: 'im-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent implements AfterContentChecked {

    title: string = "" ;
    
    constructor(private pageNameService: PageNameService) {}

    ngAfterContentChecked() {
        this.title = this.pageNameService.getData();
    }

}