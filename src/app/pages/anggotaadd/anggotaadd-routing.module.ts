import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaaddPage } from './anggotaadd.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaaddPageRoutingModule {}
