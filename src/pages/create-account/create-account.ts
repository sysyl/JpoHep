import { FormBuilder,FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  credentialsForm: FormGroup;
  masks: any;
  phoneNumber: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder){
    
  this.credentialsForm = this.formBuilder.group({
    email: [''],
    password: [''],
    phoneNumber:[],
    school:[''],
  });

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }
  onCreateAccount(){

  }

}
