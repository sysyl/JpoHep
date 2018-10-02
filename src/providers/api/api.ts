import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Account } from './../../interface/Account';


@Injectable()
export class ApiProvider {
  account : Account;
  private baseUrl: string = "http://home.paulsouille.fr:3000"
  constructor(
    private readonly http: HttpClient
      ) {

  }
 
  login(email,password): Observable<any> {
      var urlApi = this.baseUrl+'/login?email='+email+'&password='+password
      console.log(urlApi)
      
      return this.http.get(`${urlApi}`);
  }

}
