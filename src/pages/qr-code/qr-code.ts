import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


const DATABASE_FILE_NAME: string = 'data.db';

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {

  tit: string;
  des: string;
  public db: SQLiteObject;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private sqlite: SQLite) {
    this.createDatabaseFile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Qr  CodePage');
  }
  qrData = null;
  scannedCode = null;


  // Le code est scanné, nous avons donc un id du crCode, le but est de retourner les infos recherchés
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
      console.log('Error: ', err);
      });

    this.db.executeSql('select * from qrCode where id=' + this.scanCode + ';')
      .then((data) => {

        if (data == null) {
          return;
        }

        //if (data.rows) {
        //  if (data.rows.length > 0)
        //    this.tit.push(data.rows.item())
        //}

        this.tit = data.title;
        this.des = data.description;
      });
  }


  // Création de la BdD Sqlite ainsi que la table qrCode qui sera au préalable rempli

  private createDatabaseFile(): void {
    this.sqlite.create({
      name: 'DATABASE_FILE_NAME',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.createTables();
      })
      .catch(e => console.log(e));
  }

  private createTables(): void {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `qrCode` ( `id` INTEGER NOT NULL UNIQUE, `title` TEXT NOT NULL, `description` TEXT, `image` TEXT, `video` TEXT, PRIMARY KEY(`id`))')
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));

    this.db.executeSql('INSERT INTO qrCode (id, title, description, image, video) VALUES (3, \'Armand\', \'Saint-Didier-des-Bois\', \'test\', \'test\'), (4, \'Hebert\', \'Marigny-le-Châtel\', \'test\', \'test\')')
      .then(() => console.log('BdD chargé'))
      .catch(e => console.log(e));
  }


}
