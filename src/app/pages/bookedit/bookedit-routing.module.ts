import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookeditPage } from './bookedit.page';

const routes: Routes = [
  {
    path: '',
    component: BookeditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookeditPageRoutingModule {}
