import { Component, OnInit } from '@angular/core';
// add
import { Anggota } from '../../models/anggota';
import { AuthsService } from 'src/app/services/auths.service';
import { ModalController, NavController } from '@ionic/angular';
import { AnggotaaddPage } from '../anggotaadd/anggotaadd.page';


@Component({
  selector: 'app-anggota',
  templateUrl: './anggota.page.html',
  styleUrls: ['./anggota.page.scss'],
})
export class AnggotaPage implements OnInit 
{
  dtanggota: Anggota;

  constructor(
    private authService: AuthsService,
    private modalt: ModalController,
  ) {
    this.authService.anggota().subscribe(
      data => {
        this.dtanggota = data;
        console.log(data)
      }
    )
   }

  ngOnInit() {

  }


}
