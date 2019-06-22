import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Globalization } from '@ionic-native/globalization/ngx';

import { LoadingService } from './shared/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  private loading: boolean = true;

  pages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Gêneros',
      url: '/home',
      icon: 'ios-film'
    }
  ];

  selectedPath = '';

  constructor( private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, 
               private loadingService: LoadingService, private globalization: Globalization) {
    this.initializeApp();
  }

  ngOnInit() {
    //muda o status do loading toda vez que for notificado
    this.loadingService.onLoadingChanged.subscribe( isLoading => this.loading = isLoading );

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString("#0055cb");
      //this.globalization.getPreferredLanguage().then(res => MovieApiConfig.setLanguage(res.value));
      this.splashScreen.hide();
    });
  }
}
