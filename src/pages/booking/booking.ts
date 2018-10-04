import { ApiProvider } from './../../providers/api/api';
import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams,PopoverController, Popover } from 'ionic-angular';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';
import { AlertController } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams,PopoverController, Popover, Alert, AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HTTP } from '@ionic-native/http';

>>>>>>> 6179abe80be1ceff3c34d2daf4ec96038e961265

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  credentialsForm : FormGroup;

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder : FormBuilder,public popoverCtrl:PopoverController,public alertCtrl :AlertController) {
=======
  constructor(public navCtrl: NavController,private alertCtrl : AlertController,private apiProvider:ApiProvider, public navParams: NavParams,private formBuilder : FormBuilder,public popoverCtrl:PopoverController,
              private http: HTTP) {
>>>>>>> 6179abe80be1ceff3c34d2daf4ec96038e961265

    this.credentialsForm = this.formBuilder.group({
      date: [''],
      time: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
<<<<<<< HEAD

=======
>>>>>>> 6179abe80be1ceff3c34d2daf4ec96038e961265


  }

  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }


  setBooking(){
<<<<<<< HEAD
  this.alertCtrl.create({
        title: 'Vous êtes inscrit ! ',
        buttons: ['Fermer']
      }).present();
}

  }
=======
    var date = this.credentialsForm.controls['date'].value
    var hour = this.credentialsForm.controls['time'].value

    console.log(date)
    console.log(hour)

    var user_id = localStorage.getItem('user_id')
    
    this.apiProvider.setBookingById(user_id,date,hour).subscribe(data => {
      console.log(data)
      console.log(data['error'])
      if(data['error']=="SUCCESS"){
        this.setAlert('Succès','La réservation à été ajoutée avec succès.')
      }
      else{
        this.setAlert('Attention','Un problème est survenu.')
      }
      
    });


  }
}
>>>>>>> 6179abe80be1ceff3c34d2daf4ec96038e961265
