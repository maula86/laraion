import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookPageRoutingModule } from './book-routing.module';

import { BookPage } from './book.page';
import { BookaddPage } from '../bookadd/bookadd.page';
import { BookeditPage } from './../bookedit/bookedit.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookPageRoutingModule
  ],
  declarations: [BookPage, BookaddPage, BookeditPage],
  entryComponents: [BookaddPage, BookeditPage]
})
export class BookPageModule {}
