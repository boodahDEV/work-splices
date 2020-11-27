import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NbDialogRef } from '@nebular/theme';
import * as bcrypt from 'bcryptjs';
import { ApiConnectService } from '../../../service/api-connect.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  Editor = ClassicEditor;

  equipos = new Array()
  equipos_id = new Array()
  creador_proyecto: any

  project_end = {
    titulo: "",
    descripcion: "", // maximo de 32 caracteres (evaluar funcionalidad)
    id_equipo_resp: "",
    donaciones_ext: false,
    commentarios: false,
    id_creador: "",
    monto_bruto: "",
    tipo_proyecto: "",
    profesor_asesor: false,
    nombre_profesor: "",
    recaudaciones: 0,
    is_active: Boolean,
    is_validate: Boolean,
    estado: "inactivo",
    fecha_creacion: "",
    config: {
      color_title: "", //pink, blue, yellow, green, orenge, lite-green
      color_icon: "", //pink, blue, yellow, green, orenge, lite-green
      text_icon: ""
    }
  }


  constructor(
    protected api: ApiConnectService,
    protected dialogRef: NbDialogRef<any>,
    public router: Router
  ) {
    if (sessionStorage.length == 0) {
      Swal.fire({
        title: "Oppss!",
        text: `Error en la autenticacion de session. Sera redirigido al panel principal`,
        timer: 3000,
        icon: "error",
        showConfirmButton: false,
      });
      setTimeout(() => {
        this.exit_dialog()
        this.router.navigate([`dashboard`])
      }, 320)
    } else {
      /** Extraer los equipos donde el el estudiante forma parte */
      for (const key in sessionStorage) {
        if (sessionStorage.hasOwnProperty(key) && key.charAt(0) === "#") {
          bcrypt.compare(JSON.parse(sessionStorage.getItem("session-data")).uid, key).then(() => {
            this.equipos_id = JSON.parse(sessionStorage.getItem(key)).equipo
            this.creador_proyecto = JSON.parse(sessionStorage.getItem(key)).name + " "
              + JSON.parse(sessionStorage.getItem(key)).lastname + " - (" + JSON.parse(sessionStorage.getItem("session-data")).uid + ") ";
            /** CARGA DE DATOS DE EQUIPOS */
            this.api.getTeamsData(JSON.parse(sessionStorage.getItem("session-data")).uid).subscribe(resp => {
              if (resp.status == "error") {
                Swal.fire({
                  title: "Oppss",
                  text: `${resp.info}`,
                  timer: 4500,
                  icon: "error",
                  showConfirmButton: false,
                });
              } else {
                if (this.equipos_id.length != 0) {
                  resp.forEach(x => {
                    for (let index = 0; index < this.equipos_id.length; index++) {
                      const element = this.equipos_id[index];
                      if (element == x[0]) {
                        this.equipos.push(x[1])
                      }
                    }
                  })
                }
              }
            })

          }).catch(err => {
            Swal.fire({
              title: "Oppss!",
              text: `Error en la autenticacion de session.`,
              timer: 2500,
              icon: "error",
              showConfirmButton: false,
            });
          })
          break;
        }
      }
      this.generateDate()
    }
  } // fin constructor

  ngOnInit(): void {
  }

  generateDate() {
    this.project_end.fecha_creacion = new Date().toString()
  }

  // public onReady(editor) {
  //   editor.ui.getEditableElement().parentElement.insertBefore(
  //     editor.ui.view.toolbar.element,
  //     editor.ui.getEditableElement()
  //   );
  // }

  save() {
    this.project_end.id_creador = this.creador_proyecto.split('-', 2)[1].split('(', 2)[1].split(')', 2)[0];
    let estado_req = []
    let texto = ""

    if (this.project_end.titulo == '') {
      estado_req.push({
        tipo: "Titulo",
        estado: "error"
      })
    } if (this.project_end.id_equipo_resp == '') {
      estado_req.push({
        tipo: "Equipo",
        estado: "error"
      })
    }

    if (
      this.project_end.titulo.length != 0 &&
      this.project_end.id_equipo_resp.length != 0 &&
      this.creador_proyecto.length != 0
    ) {
      this.api.createProject(this.project_end).subscribe(resp => {
        if (resp.status == "ok") {
          Swal.fire({
            title: "Proyecto creado!",
            text: resp.info,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          for (const key in sessionStorage) {
            if (sessionStorage.hasOwnProperty(key) && key.charAt(0) === "#") {
              bcrypt.compare(JSON.parse(sessionStorage.getItem("session-data")).uid, key).then(() => {
               var temp = JSON.parse(sessionStorage.getItem(key))
               temp.proyectos.push(resp.uid)
               sessionStorage.removeItem(key)
               sessionStorage.setItem(key, JSON.stringify(temp))
              })
            }
          }
          this.exit_dialog();

        } else {
          Swal.fire({
            title: "Oppss!",
            text: resp.info,
            timer: 2500,
            icon: "error",
            showConfirmButton: false,
          });
        }
      })

    } else {
      for (let index = 0; index < estado_req.length; index++) {
        const element = estado_req[index];
        texto = texto + element.tipo + ", ";
      }
      Swal.fire({
        title: "Oppss!",
        text: `Errores de entrada en el ${texto} ... Corregir para continuar.`,
        icon: "error",
        showConfirmButton: true,
      });
    }
  }

  getEquipoResponsable(event: any) {
    this.project_end.id_equipo_resp = this.equipos_id[this.equipos.indexOf(event)];
  }

  // getTipoProyecto(event: any) {
  //   switch (event) {
  //     case "investigacion":
  //       this.project_end.tipo_proyecto = "Investigativo"
  //       break;
  //     case "personal":
  //       this.project_end.tipo_proyecto = "Proyecto personal"
  //       break;
  //     case "educativo":
  //       this.project_end.tipo_proyecto = "Proyecto educativo"
  //       break;
  //   }
  // }

  exit_dialog() {
    this.dialogRef.close();
  }

  getColor(event: any) {
    this.project_end.config.color_icon = event
    this.project_end.config.color_title = event
  }

}
