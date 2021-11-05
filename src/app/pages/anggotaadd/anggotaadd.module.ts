import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaaddPageRoutingModule } from './anggotaadd-routing.module';

import { AnggotaaddPage } from './anggotaadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaaddPageRoutingModule
  ],
  declarations: [AnggotaaddPage]
})
export class AnggotaaddPageModule {}
