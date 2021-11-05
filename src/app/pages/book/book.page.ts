

import { Component, OnInit } from '@angular/core';
// add
import { Buku } from 'src/app/models/buku';
import { AuthsService } from 'src/app/services/auths.service';
import { ModalController, NavController } from '@ionic/angular';
import { BookaddPage } from '../bookadd/bookadd.page';

import { Router } from '@angular/router';
import { BookeditPage } from '../bookedit/bookedit.page';





@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit
 {
  dtbuku: Buku;
  router: any;
  constructor(
    private authService: AuthsService,
    private modalt: ModalController,
    // private navctrl: NavController
    ) { 
      this.authService.buku().subscribe(
      data => {
        this.dtbuku = data;
        console.log(data)
      }

    )
  }


  ngOnInit() {

  }



  async tambah() {
    const tambahModal = await this.modalt.create({
      component: BookaddPage
    });
    return await tambahModal.present();
  }

  async edit(id: number){
    // this.authService.findid(id)
    //   .subscribe(
    //     data => {
    //       // console.log(data);
    //     },
    //     error => console.log(error)
    //   );
    
    this.authService.editbuku(id)
      .subscribe(
        data => {
          // console.log(data);
        },
        error => console.log(error)
      );
        
    const tambahModal = await this.modalt.create({
      component: BookeditPage,
      componentProps: {
        foo: id,
        bar: 'world'
      }
    });

    return await tambahModal.present();
    


  }

  hapus(id: number) {
    this.authService.hapuskan(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

//
}
