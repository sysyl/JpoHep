import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Vibration } from '@ionic-native/vibration';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private barcodeScanner: BarcodeScanner,private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qr  CodePage');

  }


  qrData = null;
  scannedCode = null;

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      this.vibration.vibrate([1000,200,1000]);
    }, (err) => {
        console.log('Error: ', err);
    });
  }




}
