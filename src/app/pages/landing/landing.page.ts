import { Component, OnInit } from '@angular/core';
// Add
import { ModalController, MenuController } from '@ionic/angular';
import { LoginPage } from './../login/login.page';
import { RegisterPage } from './../register/register.page';
import { CameraPage } from '../../camera/camera.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private modal: ModalController,
    private muncul: MenuController
  ) {
    this.muncul.enable(false);
  }

  ngOnInit() {
  }

  async login() {
    const loginModal = await this.modal.create( {
      component: LoginPage
    } );
    return await loginModal.present();
  }

  async register() {
    const registerModal = await this.modal.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }
  async camera() {
    const cameraModal = await this.modal.create({
      component: CameraPage
    });
    return await cameraModal.present();
  }

}
