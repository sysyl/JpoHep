import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Account } from './../../interface/Account';


@Injectable()
export class ApiProvider {
  account : Account;
  private baseUrl: string = "https://home.paulsouille.fr"
  constructor(
    private readonly http: HttpClient
      ) {

  }
 
  login(username,password): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
  }

}
