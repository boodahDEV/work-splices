import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../../../../service/api-connect.service';

@Component({
  selector: 'app-offial-login',
  templateUrl: './offial-login.component.html',
  styleUrls: ['./offial-login.component.scss']
})
export class OffialLoginComponent implements OnInit {
  user: any;
  submitted: boolean;

  constructor(private auth: ApiConnectService) {
    
   }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  login(){
    this.auth.login(this.user).subscribe(res=>{
      sessionStorage.setItem(res.uid + new Date(),res)
    })
  }
}
