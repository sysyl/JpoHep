import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, Popover } from 'ionic-angular';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  credentialsForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder : FormBuilder,public popoverCtrl:PopoverController,public alertCtrl :AlertController) {

    this.credentialsForm = this.formBuilder.group({
      date: [''],
      time: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');


  }
  setBooking(){
  this.alertCtrl.create({
        title: 'Vous êtes inscrit ! ',
        buttons: ['Fermer']
      }).present();
}

  }
