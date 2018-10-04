import { ApiProvider } from './../../providers/api/api';
import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, Popover, Alert, AlertController } from 'ionic-angular';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HTTP } from '@ionic-native/http';


@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  credentialsForm : FormGroup;

  constructor(public navCtrl: NavController,private alertCtrl : AlertController,private apiProvider:ApiProvider, public navParams: NavParams,private formBuilder : FormBuilder,public popoverCtrl:PopoverController,
              private http: HTTP) {

    this.credentialsForm = this.formBuilder.group({
      date: [''],
      time: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
<<<<<<< HEAD

=======
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc


  }

  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }

<<<<<<< HEAD
  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }

=======
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc

  setBooking(){
    var date = this.credentialsForm.controls['date'].value
    var hour = this.credentialsForm.controls['time'].value

    console.log(date)
    console.log(hour)

    var user_id = localStorage.getItem('user_id')
<<<<<<< HEAD

=======
    
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc
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