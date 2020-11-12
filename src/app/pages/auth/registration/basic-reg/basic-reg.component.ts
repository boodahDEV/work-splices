import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from '../../../../service/api-connect.service';
import Swal from "sweetalert2"
import { NbToastrService } from '@nebular/theme';
import { response } from 'express';
import { Router } from '@angular/router';

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
  facultades = new Array()

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
    fecha_creacion: new Date(),
    password: ""
  }


  constructor(private api: ApiConnectService, private router: Router) {
    this.fecha_view = new Date();
    this.validate_pass = ""
    this.api.getFaculty().subscribe(resp => {
      resp.forEach((datos: any[][]) => {
        this.facultades.push({
          id: datos[0],
          nombre: datos[1]
        })
      });
    })
    this.generate_date_create()
  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }

  register() {
    if (this.status_name) {
      this.api.register(this.user).subscribe(resp => {
        console.log(resp)
        Swal.fire({
          icon: 'success',
          title: 'Registro con exito!',
          text: 'Bienvenido a YEKSPLICES!',
          timer: 500
        })
        setTimeout(() => {
          this.router.navigate(['/authentication/login']);
        }, 350);
      })
    } else {
      if(this.user.password === this.validate_pass){
        this.api.register(this.user).subscribe(resp => {
          console.log(resp)
          Swal.fire({
            icon: 'success',
            title: 'Registro con exito!',
            text: 'Bienvenido a YEKSPLICES!',
            timer: 500
          })
          setTimeout(() => {
            this.router.navigate(['/authentication/login']);
          }, 350);
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oppss!',
          text: 'Las contrasenas no coinciden, favor de verificar.',
          timer: 2500
        })
        this.user.password = ""; this.validate_pass = ""
      }
    }
  }

  get_nacionalidad(value: any) {
    this.user.nacionalidad = value;
  }

  get_facultad(value: any) {
    this.user.facultad = value
  }

  generate_date_create() {
    var now = new Date;
    this.user.fecha_creacion = new Date(new Date().getTime())
    // this.user.fecha_creacion =  Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
    //   now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
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
