import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthsService } from 'src/app/services/auths.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.page.html',
  styleUrls: ['./bookadd.page.scss'],
})
export class BookaddPage implements OnInit {

  constructor(
    private modal: ModalController,
    private authService: AuthsService,
    private navctrl: NavController,
    private alert: AlertService

  ) { }

  ngOnInit() {
  }


  kembali() {
    this.modal.dismiss();
  }


  simpanbuku(form: NgForm) {
    this.authService.addbuku(form.value.kode_b,
                             form.value.judul,
                             form.value.penerbit,
                             form.value.pengarang,
                             form.value.rak,
                             form.value.jml,
                             form.value.price).subscribe(
        (data) => {
          this.alert.tampilAlert('Selamat', 'Simpan Berhasil');
        },
        err => {
          console.log(err);

        },

        () => {
          this.kembali();
          this.navctrl.navigateRoot('book');
        }
      )
  }




//
}
