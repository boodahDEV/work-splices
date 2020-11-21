import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  Editor = ClassicEditor;
  color_title: String; //pink, blue, yellow, green, orenge, lite-green
  color_icon: String; //pink, blue, yellow, green, orenge, lite-green
  icon_principal: String;
  title = "";
  descripcion = "" // maximo de 32 caracteres (evaluar funcionalidad)
  selectedItem1=""
  selectedItem2=""
  selectedItem3=""
  selectedItem4=""
  toggleAsesor = false;

  constructor() {

   }

  ngOnInit(): void {
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  save(){
    console.log(this.descripcion)
  }

  getColor(event: any) {
    this.color_icon = event
  }

}
