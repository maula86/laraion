import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// add
import { AuthsService } from './services/auths.service';
import { AlertService } from './services/alert.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Book',
      url: '/book',
      icon: 'book'
    },
    {
      title: 'Anggota',
      url: '/anggota',
      icon: 'people'
    },
    {
      title: 'Transaksi',
      url: '/transaksi',
      icon: 'clipboard'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthsService,
    private alertService: AlertService,
    private navctrl: NavController,
    private themeService: ThemeService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
        // tslint:disable-next-line: deprecation
    // tslint:disable-next-line: no-unused-expression
    this.authService.logout().subscribe(
      // tslint:disable-next-line: no-unused-expression
    (data: any) => {
        console.log(data);
        this.alertService.tampilAlert('Konfirmasi', 'Anda Berhasil Logout');
      },
    // tslint:disable-next-line: no-unused-expression
    (err: any) => {
        console.log(err);
        // tslint:disable-next-line: no-string-literal
        // this.alertService.tampilAlert(err.error.errors['email'] + ' ', err.error.errors['password']);
        this.alertService.tampilAlert('Maaf', 'Maaf');
      },
      // tslint:disable-next-line: no-unused-expression
    () => {
        this.navctrl.navigateRoot('landing');
      },
    );
  }

  // Dark Mode
  toggleDarkMode(){
    this.themeService.toggleAppTheme();
  }

  //
}
