import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  connection: any
  private URL = "https://casper-support-consultation.herokuapp.com/api";
  constructor(private http: HttpClient, private router: Router) { } 

  signUp(user) {
    return this.http.post<any>(this.URL + `/login`, user);
  }

  login(user) {
    return this.http.post<any>(this.URL + `/login`, user);
  }

  logger(): Boolean {
    if(!!sessionStorage.getItem("session-data") && JSON.parse(sessionStorage.getItem('session-data')).role === 'Administrador'){
      return true
    }else{
      return false
    }
  }

}
