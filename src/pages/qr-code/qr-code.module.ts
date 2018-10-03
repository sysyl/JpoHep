import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



@NgModule({
  declarations: [
    BarcodeScanner,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeScanner),
  ],

})
export class QrCodePageModule {}
