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
    { title: 'Salir',  icon: 'log-out-outline', },
  ];

  title = 'work-splice';
}
