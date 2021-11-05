import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingPageRoutingModule } from './landing-routing.module';

import { LandingPage } from './landing.page';
import { LoginPage } from './../login/login.page';
import { RegisterPage } from './../register/register.page';
import { CameraPage } from '../../camera/camera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandingPageRoutingModule
  ],
  declarations: [LandingPage, LoginPage, RegisterPage, CameraPage],
  entryComponents:[LoginPage, RegisterPage, CameraPage]
})
export class LandingPageModule {}
