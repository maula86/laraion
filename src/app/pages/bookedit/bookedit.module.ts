import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookeditPageRoutingModule } from './bookedit-routing.module';

import { BookeditPage } from './bookedit.page';
import { BookPage } from '../book/book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookeditPageRoutingModule
  ],
  declarations: [BookeditPage, BookPage],
  entryComponents: [BookPage]
})
export class BookeditPageModule {}
