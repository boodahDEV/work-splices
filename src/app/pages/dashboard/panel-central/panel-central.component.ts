import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-central',
  templateUrl: './panel-central.component.html',
  styleUrls: ['./panel-central.component.scss']
})
export class PanelCentralComponent implements OnInit {

  color_title: String; //pink, blue, yellow, green, orenge, lite-green
  color_icon: String; //pink, blue, yellow, green, orenge, lite-green
  icon_principal: String;
  title: String;
  descripcion = ['', '', ''] // maximo de 32 caracteres (evaluar funcionalidad)

  constructor() {
    this.color_icon = "lite-green";
    this.color_title = "lite-green";
    this.icon_principal = "military";
    this.title = "Esto es una prueba 21";
    this.descripcion.push('sloganslogansloganslogansloganss')
    this.descripcion.push('sloganslogansloganslogansloganss')
    this.descripcion.push('max32caracteresy3renglonesmaxis')


  }

  ngOnInit(): void {
  }

}
