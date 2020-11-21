import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateStorageService {
  private data = new BehaviorSubject<any>({
    email:String,
    emailValidate:String,
    uid:String
  })
  private getdata$ = this.data.asObservable()

  constructor() {
  }

  getData(): Observable<any> {
    let status = false
    let udata = {}
      for (const key in sessionStorage) {
        if (key === "session-data") {
          status = true
          udata = JSON.parse(sessionStorage.getItem(key))
          udata = {
            ...udata,
            status:status
          }
          console.log("On If")
          break;
        }else{
          udata = {
            ...udata,
            status:status
          }
          continue;
          console.log("On Else")
          status = false
        }
      }
      this.data.next(JSON.stringify(udata))
      return this.getdata$;

  }
}
