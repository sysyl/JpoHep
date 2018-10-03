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

  createAccount(email,password,phoneNumber,school,firstName,lastName):Observable<any>{
    var urlApi = this.baseUrl+'/createAccount?email='+email+'&password='+password+'&phoneNumber='+phoneNumber+'&school='+school+'&firstName='+firstName+'&lastName='+lastName
    console.log(urlApi)
    return this.http.get(`${urlApi}`);
  }

  getRoomById(roomId):Observable<any>{
    var urlApi = this.baseUrl+'/rooms/'+roomId;
    return this.http.get(`${urlApi}`);
  }

}
