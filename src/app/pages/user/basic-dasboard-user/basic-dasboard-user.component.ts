import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import * as bcrypt from 'bcryptjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-basic-dasboard-user',
  templateUrl: './basic-dasboard-user.component.html',
  styleUrls: ['./basic-dasboard-user.component.scss']
})
export class BasicDasboardUserComponent implements OnInit {

  equipos = {
    name: "Mis Equipos",
    countData: [],
    color: "yellow"
  }
  ideas = {
    name: "Mis Ideas",
    countData: [],
    color: "yellow"
  }
  comentarios = {
    name: "Mis Comentarios",
    countData: [],
    color: "yellow"
  }
  donaciones = {
    name: "Mis Donaciones",
    countData: [],
    color: "yellow"
  }
  proyectos = {
    name: "Mis Proyectos",
    countData: [],
    color: "yellow"
  }

  textHeader = ""
  textTitle: any
  type = ""
  textColor = ""
  selectedItem = "yellow"

  constructor(private dialogService: NbDialogService) {
    for (const key in sessionStorage) {
      if (sessionStorage.hasOwnProperty(key) && key.charAt(0) === "#") {
        bcrypt.compare(JSON.parse(sessionStorage.getItem("session-data")).uid, key).then(() => {
          this.equipos.countData = JSON.parse(sessionStorage.getItem(key)).equipo;
          this.comentarios.countData = JSON.parse(sessionStorage.getItem(key)).comentarios;
          this.ideas.countData = JSON.parse(sessionStorage.getItem(key)).ideas;
          this.proyectos.countData = JSON.parse(sessionStorage.getItem(key)).proyectos;
          this.donaciones.countData = JSON.parse(sessionStorage.getItem(key)).donaciones;
        })
        break;
      }
    }
  }

  open(dialog: TemplateRef<any>, type: any) {
    this.textHeader = "Editar " + type;
    this.type = type;
    switch (type) {
      case "equipos":
        this.textTitle = this.equipos.name
        break;
      case "ideas":
        this.textTitle = this.ideas.name
        break;
      case "comentarios":
        this.textTitle = this.comentarios.name
        break;
      case "proyectos":
        this.textTitle = this.proyectos.name
        break;
      case "donaciones":
        this.textTitle = this.donaciones.name
        break;
    }
    this.dialogService.open(dialog);
  }

  save() {
    switch (this.type) {
      case "equipos":
        this.equipos.name = this.textTitle;
        this.equipos.color = this.textColor
        break;
      case "ideas":
        this.ideas.name = this.textTitle;
        this.ideas.color = this.textColor
        break;
      case "comentarios":
        this.comentarios.name = this.textTitle;
        this.comentarios.color = this.textColor
        break;
      case "proyectos":
        this.proyectos.name = this.textTitle;
        this.proyectos.color = this.textColor
        break;
      case "donaciones":
        this.donaciones.name = this.textTitle;
        this.donaciones.color = this.textColor
        break;
    }
  }

  getColor(event: any) {
    this.textColor = event
  }

  ngOnInit(): void {
  }

  saveConfig() {
    let loadData = [];
    loadData.push(JSON.stringify(this.equipos), JSON.stringify(this.donaciones), JSON.stringify(this.comentarios), JSON.stringify(this.ideas), JSON.stringify(this.proyectos))
    localStorage.setItem("config-card-user", loadData.toString());
    Swal.fire({
      title: "Guardado!",
      text: `Tus datos fueron guardados correctamente.`,
      timer: 1500,
      icon: "success",
      showConfirmButton: false,
    });
  }

}
