import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(public alertctrl: AlertController) { }

  async tampilAlert(jdl: any, pesan: any) {
    const alrt = await this.alertctrl.create({
      header : jdl,
      message: pesan
    });

    alrt.present();
  }


  // async alertYN(hmsg: any, submsg: any, n: any, y: any){
  //     return new Promise(async (ngenteni) => {
  //       const atanya = await this.alertctrl.create({
  //         header: hmsg,
  //         message: submsg,
  //         buttons:
  //         [
  //           {
  //             text: n,
  //             handler: () => {
  //               return ngenteni(false);
  //             },
  //           },
  //           {
  //             text: y,
  //             handler: () => {
  //               return ngenteni(true);
  //             },
  //           },
  //         ],
  //       });
  
  //       await atanya.present();
  //     });
  //   }
  
  
  //
}
