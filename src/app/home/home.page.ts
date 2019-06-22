import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../shared/loading/loading.service';

@Component({
  selector: 'im-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    
  }
  

}
