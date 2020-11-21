import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NbButtonModule, NbCardModule, NbDialogModule, NbIconModule, NbInputModule, NbSelectModule, NbToggleModule } from '@nebular/theme';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { IdeasComponent } from './ideas/ideas.component';
import { ProyectosComponent } from './proyectos.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateIdeaComponent } from './create-idea/create-idea.component';

@NgModule({
    imports: [
        CommonModule,
        ProyectosRoutingModule,
        SharedModule,
        NbToggleModule,
        FormsModule,
        NbButtonModule,
        NbCardModule,
        NbIconModule,
        NbSelectModule,
        CKEditorModule,
        NbInputModule,
        NbDialogModule.forChild(),
        HttpClientModule
    ],
    declarations: [
        ProyectosComponent,
        IdeasComponent,
        CreateProjectComponent,
        CreateIdeaComponent

    ]
})
export class ProyectosModules { }
