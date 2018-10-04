import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
=======
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentialsForm: FormGroup;
  account : Account;

<<<<<<< HEAD
  constructor(public navCtrl: NavController,private events:Events, public navParams: NavParams,private alertCtrl:AlertController,private formBuilder: FormBuilder,private apiProvider: ApiProvider
=======
  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl:AlertController,private formBuilder: FormBuilder,private apiProvider: ApiProvider
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc
    ) {
      this.credentialsForm = this.formBuilder.group({
        email: [''],
        password: [''],

      });
  }

  ionViewDidLoad() {
  }

  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  onSignIn() {
<<<<<<< HEAD
    console.log(this.credentialsForm.controls['email'].value)
      this.apiProvider.login(this.credentialsForm.controls['email'].value,this.credentialsForm.controls['password'].value).subscribe(data => {
        // console.log(data)
=======

    //this.navCtrl.setRoot(HomePage);
    console.log(this.credentialsForm.controls['email'].value)
      this.apiProvider.login(this.credentialsForm.controls['email'].value,this.credentialsForm.controls['password'].value).subscribe(data => {
        console.log(data)
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc
        if(data['error']=='ERROR_EMAIL'){
          this.setAlert('Attention','Email incorrect.')
        }
        else{
          if(data['error']=='ERROR_PASSWORD'){
            this.setAlert('Attention','Mot de passe incorrect')
          }
          else{
            if(data['error']=='SUCCESS'){
              localStorage.setItem("user_id", data.data.id);
<<<<<<< HEAD
              localStorage.setItem('role_id',data.data.role_id);
              this.events.publish('user:changed', localStorage.getItem('role_id'));
              this.navCtrl.setRoot(HomePage);
            }
          }
        }

=======

              this.navCtrl.setRoot(HomePage)
            }
          }
        }
        
>>>>>>> d0fd627ecd2d47ce50d54d633e1ef168adfb1adc
      });


  }

  onCreateAccount() {
    this.navCtrl.push(CreateAccountPage)
  }

}
