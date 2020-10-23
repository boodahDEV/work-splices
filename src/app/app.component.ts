import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userPictureOnly: boolean = false;
  user: any;
  uid: string
  items = [
    { title: 'Configurar', icon: 'settings-2-outline' },
    { title: 'Salir', icon: 'log-out-outline', },
  ];

  title = 'work-splice';
  is_login:boolean;
  constructor() {
    if(!sessionStorage.getItem("token-s"))
      this.is_login = false
    else
      this.is_login = true
  }
}
