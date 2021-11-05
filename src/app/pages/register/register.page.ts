import { Component, OnInit } from '@angular/core';
// Add
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { NgForm } from '@angular/forms';
import { AuthsService } from 'src/app/services/auths.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    private modal: ModalController,
    private modallog: ModalController,
    private muncul: MenuController,
    private authService: AuthsService,
    private navctrl: NavController,
    private alert: AlertService
    ) {
    this.muncul.enable(false);
    }

  ngOnInit() {
  }

  kembali() {
    this.modal.dismiss();
  }

  async Login() {
    const loginModal = await this.modallog.create({
      component: LoginPage
    });
    this.kembali();
    return await loginModal.present();
  }

  register(form: NgForm) {
    this.authService.register(form.value.nama, form.value.email, form.value.password).subscribe(
      (data) => {
        this.authService.login(form.value.email, form.value.password
          ).subscribe(
            (data) => {
              this.alert.tampilAlert('Selamat', 'Login Suksess');
            },
            err => {
              console.log(err);
              this.alert.tampilAlert(err.error.errors.email, ' ' + err.error.errors.password);
            },
            () => {
              this.kembali();
              this.muncul.enable(true);
              this.navctrl.navigateRoot('home');
            }
          );
      },
      err => {
        console.log(err);
        this.alert.tampilAlert(
          err.error.errors.nama , err.error.errors.email + ' ' + err.error.errors.password
        );
      }
    );
  }


//
}
