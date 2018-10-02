import { ApiProvider } from './../../providers/api/api';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  credentialsForm: FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder){
    
  this.credentialsForm = this.formBuilder.group({
    email: [''],
    password: [''],
    phoneNumber:[],
    school:[''],
    firstName:[''],
    lastName:['']

  });

}

ionViewDidLoad() {

}
onCreateAccount(){

}

}
