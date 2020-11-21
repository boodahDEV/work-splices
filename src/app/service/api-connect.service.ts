import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiConnectService {
  connection: any
  private URL = "http://localhost:3246/api";
  constructor(private http: HttpClient, private router: Router) { } 

  register(user) {
    return this.http.post<any>(this.URL + `/register`, user);
  }

  login(user) {
    return this.http.post<any>(this.URL + `/login`, user);
  }

  getFaculty(){
    return this.http.get<any>(this.URL + `/faculty`);
  }

  getStudentData(uid){
    return this.http.get<any>(this.URL + `/user-info/${uid}`);
  }

  logger(): Boolean {
    if(!!sessionStorage.getItem("session-data") && JSON.parse(sessionStorage.getItem('session-data')).role === 'Administrador'){
      return true
    }else{
      return false
    }
  }

  logout(){
    return this.http.get<any>(this.URL + `/logout`);
  }

}