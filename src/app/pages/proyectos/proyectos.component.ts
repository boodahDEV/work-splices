import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateProjectComponent } from './create-project/create-project.component';


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
  selectedItem=""

  constructor(private dialogService: NbDialogService) { }

  ngOnInit(): void {
  }

  open(){
    this.dialogService.open(CreateProjectComponent, {closeOnBackdropClick:false,closeOnEsc:true});
  }

}
