import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthsService } from '../../services/auths.service';
import { AlertService } from '../../services/alert.service';
import { Buku } from 'src/app/models/buku';


@Component({
  selector: 'app-bookedit',
  templateUrl: './bookedit.page.html',
  styleUrls: ['./bookedit.page.scss'],
})
export class BookeditPage implements OnInit {
  [x: string]: any;


  dibbuk: Buku
  id: any;
  num: any;
  foo;
  bar;


  constructor(
    private modal: ModalController,
    private authService: AuthsService,
    private navctrl: NavController,
    private alert: AlertService) {
}
  ngOnInit() {
    this.authService.editbuku(this.foo).subscribe(
      datad => {
        this.dibbuk = datad;
        console.log(datad);
      }
      );
  }

  kembali() {
    this.modal.dismiss();
  }

  saveubah(form: NgForm) {
    this.authService.updatebuku(form.value.id,
                                form.value.kode_b,
                                form.value.judul,
                                form.value.penerbit,
                                form.value.pengarang,
                                form.value.rak,
                                form.value.jml,
                                form.value.price,
                                form.value.sts_buku)
              .subscribe(
                (data) => {
                this.alert.tampilAlert('Selamat', 'Update Berhasil');
                },
                err => {
                  console.log(err);
        
                },
        
                () => {
                  this.kembali();
                  // this.navCtrl.navigateRoot('book');
                }
              )
}

}
