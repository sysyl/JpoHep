import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
              private http: HTTP) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qr  CodePage');
  }


  qrData = null;
  scannedCode = null;
  // Le code est scanné, nous avons donc un id du crCode, le but est de retourner les infos recherchés
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text

      this.http.get('http://localhost:3000/rooms/'+this.scannedCode, {}, {})
        .then(data => {
          console.log(data.data); // data received by server
        })
        .catch(error => {
          console.log(error.error); // error message as string
        });

    }, (err) => {
      console.log('Error: ', err);
      });

  }


}
