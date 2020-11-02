import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiConnectService } from './api-connect.service';

@Injectable({
  providedIn: 'root'
})
export class FooGuardService implements CanActivate  {

  constructor(private auth: ApiConnectService,private router: Router) { }
  canActivate(): boolean {
    if(this.auth.logger()){
      return true;
    }
    this.router.navigate(['/dashboard'])
    return false 

  }
}
