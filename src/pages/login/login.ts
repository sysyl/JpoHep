import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private apiProvider: ApiProvider
    ) {
      this.credentialsForm = this.formBuilder.group({
        email: [''],
        password: [''],
      
      });
  }

  ionViewDidLoad() {
  }


  onSignIn() {

    this.navCtrl.setRoot(HomePage)

    console.log(this.credentialsForm.controls['email'].value)
      this.apiProvider.login(this.credentialsForm.controls['email'].value,this.credentialsForm.controls['password']).subscribe(data => {
        console.log(data)
        
        if(data['error']=='ERROR'){
        }
        else{
          this.account = data;

        }
 
      });
    
    
  }

  onCreateAccount() {
    this.navCtrl.push(CreateAccountPage)
    //this.logger.info('SignInPage: onForgotPassword()');
  }

}
