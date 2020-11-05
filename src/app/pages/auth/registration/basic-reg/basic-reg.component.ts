import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  submitted: boolean;
  selectedItem: any
  selectedItem2: any
  user: any

  constructor() {
    this.user = {
      email: "",
      name: "",
      lastname: "",
      year_course: "",
      carrera: "",
      CIP: "",
      nacionalidad: "",
      facultad: "",
      indice:"",
      num_recibo:"",
      uid:"uvNv8f8A7VnEslg2umUm",
      fecha_creacion: ""
    }
    this.generate_date_create()
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  register() {

  }

  get_nacionalidad(value: any) {
    this.user.nacionalidad = value;
    console.log("-> ", this.user.nacionalidad)
  }

  get_facultad(value: any) {
    this.user.facultad = value
  }

  generate_date_create(){
    this.user.fecha_creacion = new Date().getFullYear().toString();
    console.log(new Date(new Date().getFullYear().toString()).getTime())
  }
}
