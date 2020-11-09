import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-reg',
  templateUrl: './basic-reg.component.html',
  styleUrls: ['./basic-reg.component.scss']
})
export class BasicRegComponent implements OnInit {
  submitted: boolean;
  selectedItem: any
  selectedItem3: any
  selectedItem2: any
  fecha_view: any
  is_generate: any
  validate_pass: any
  year_now = Number(new Date().getFullYear()) - 2
  status_name = false
  tmp_ps_generate = ""
  user = {
    email: "",
    name: "",
    lastname: "",
    year_course: "",
    carrera: "",
    CIP: "",
    nacionalidad: "",
    facultad: "",
    indice: "",
    num_recibo: "",
    uid: "uvNv8f8A7VnEslg2umUm",
    fecha_creacion: "",
    password: ""
  }


  constructor() {
    this.fecha_view = new Date();
    this.validate_pass = ""

    this.generate_date_create()
    console.log(this.year_now)
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  register() {
    console.log(this.user)
  }

  get_nacionalidad(value: any) {
    this.user.nacionalidad = value;
    console.log("-> ", this.user.nacionalidad)
  }

  get_facultad(value: any) {
    this.user.facultad = value
  }

  generate_date_create() {
    var now = new Date;
    this.user.fecha_creacion = "" + Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
  }

  generate_password(value: any) {
    this.is_generate = value
    if (value == "generar" && this.user.name !== '') {
      this.make()
      this.status_name = true
    } else 
      this.status_name = false
    
  }//

  make() {
    let second = ""
    for (let i = 0; i < 3; i++) {
      const element = this.user.name[Math.floor(Math.random() * (0 - this.user.name.length + 1)) + this.user.name.length];
      second = second.concat(element)
      second = second.concat(this.user.CIP[Math.floor(Math.random() * (0 - this.user.CIP.length + 1)) + this.user.CIP.length])
      const elemento = this.user.lastname[Math.floor(Math.random() * (0 - this.user.lastname.length + 1)) + this.user.lastname.length];
      second = second.concat(elemento)
    }
    this.user.password = "Up".concat(second)
  }
}
