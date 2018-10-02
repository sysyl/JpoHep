import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  qrData = null;
  scannedCode = null;

  constructor() { }

  logout(){
    
  }
}
