import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  qrData = null;
  scannedCode = null;

  constructor() { }

  ionViewDidLoad()
  {

  }

  logout(){

  }

  playVideo(){
    var video = document.getElementById('homeVideo')
    var videoStatus = document.getElementById('homeVideo').getAttribute('status')

    console.log(videoStatus)


    if(videoStatus = "pause")
    {
      video.setAttribute("status","playing");
      video.play()

    }
    else if(videoStatus = "playing")
    {
      console.log(videoStatus)
      video.setAttribute("status","pause");
      video.pause()
    }

    var videoStatus = ""

  }
}
