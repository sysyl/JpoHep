import { PopoverPage } from './../popover/popover';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController, Popover } from 'ionic-angular';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HTTP } from '@ionic-native/http';


@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  credentialsForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder : FormBuilder,public popoverCtrl:PopoverController,
              private http: HTTP) {

    this.credentialsForm = this.formBuilder.group({
      date: [''],
      time: [''],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');


  }
  setBooking(){
    var date = this.credentialsForm.controls['date'].value
    var hour = this.credentialsForm.controls['time'].value

    console.log(date)
    console.log(hour)
    var data = {
          "date": date,
          "hour": hour
        };

      var header = { headers: {"Content-Type": "application/json"} };

      this.http.get('http://home.paulsouille.fr:3000/bookings/add/'+date+"/"+hour, {}, {}).then(data => {
        console.log(data.status);
      }).catch(error => {
        console.log(error.status);
      });

  }
}
