import { Component, OnInit } from '@angular/core';

// Add
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from './../register/register.page';
import { NgForm } from '@angular/forms';
import { AuthsService } from '../../services/auths.service';
import { AlertService } from './../../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email: any;
  password: any;

  constructor(
    private modal: ModalController,
    private modalr: ModalController,
    private muncul: MenuController,
    private authService: AuthsService,
    private alertService: AlertService,
    private navctrl: NavController
    ) {
    this.muncul.enable(false);
    }

  ngOnInit() {
  }

  kembali() {
    this.modal.dismiss();
  }

  async register() {
    const registerModal = await this.modalr.create({
      component: RegisterPage
    });
    this.kembali();
    return await registerModal.present();
  }

  login(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
      // (data) => {
        console.log(data);
        this.alertService.tampilAlert('Selamat', 'Login Suksess');
      },
      err => {
         console.log(err);
         this.alertService.tampilAlert(err.error.errors[' email '] + ' ' , err.error.errors[' password ']);
        //  this.alertService.tampilAlert('Maaf', 'Login Gagal');

      },

      () => {
        this.kembali();
        this.muncul.enable(true);
        this.navctrl.navigateRoot('home');
      },
    );
  }

}
