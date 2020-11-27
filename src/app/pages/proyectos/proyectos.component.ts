import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateProjectComponent } from './create-project/create-project.component';
import * as bcrypt from 'bcryptjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  color_title: String; //pink, blue, yellow, green, orenge, lite-green
  color_icon: String; //pink, blue, yellow, green, orenge, lite-green
  icon_principal: String;
  title: String;
  descripcion = "" // maximo de 32 caracteres (evaluar funcionalidad)
  selectedItem = ""
  equipos = []

  constructor(private dialogService: NbDialogService,
    public router: Router
  ) {
    for (const key in sessionStorage) {
      if (sessionStorage.hasOwnProperty(key) && key.charAt(0) === "#") {
        bcrypt.compare(JSON.parse(sessionStorage.getItem("session-data")).uid, key).then(() => {
          this.equipos = JSON.parse(sessionStorage.getItem(key)).equipo
        })
      }
    }
  }

  ngOnInit(): void {
  }

  open() {
    if (this.equipos.length == 0) {
      Swal.fire({
        title: 'NO formas parte de un Equipo!',
        text: "Para crear un PROYECTO primero debes formar parte de un equipo activo.'",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Crear equipo'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate([`/user/student/${JSON.parse(sessionStorage.getItem("session-data")).uid}/teams`]) /** AQUI VA LA RUTA DE EQUIPO */
        }
      })
    }else{
      this.dialogService.open(CreateProjectComponent, { closeOnBackdropClick: false, closeOnEsc: false });
    }
  }
}
