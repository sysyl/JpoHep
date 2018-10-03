import { Vibration } from '@ionic-native/vibration';
import { HttpClient } from '@angular/common/http';
import { BookingPage } from './../pages/booking/booking';
import { CreateAccountPage } from './../pages/create-account/create-account';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodePage } from '../pages/qr-code/qr-code';
import { ApiProvider } from '../providers/api/api';
import { PopoverPage } from '../pages/popover/popover';
import { ContactPage } from '../pages/contact/contact';
import { HttpClientModule } from '@angular/common/http';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CreateAccountPage,
    BookingPage,
    QrCodePage,
    PopoverPage,
    ContactPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CreateAccountPage,
    BookingPage,
    QrCodePage,
    PopoverPage,
    ContactPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,

    BarcodeScanner,
    Vibration
  ]
})
export class AppModule {}
