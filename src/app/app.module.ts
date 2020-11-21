import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotificacionesComponent } from './layout/admin/notificaciones/notificaciones.component';
import { HttpClientModule } from '@angular/common/http';
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbThemeModule, NbToastrModule, NbUserModule} from '@nebular/theme';
import { BasicProjectViewComponent } from './pages/basic-project-view/basic-project-view.component';
import { BasicProjectCommentComponent } from './pages/basic-project-comment/basic-project-comment.component';
import { BasicUnirmeComponent } from './pages/basic-unirme/basic-unirme.component';
import { BasicDonateComponent } from './pages/basic-donate/basic-donate.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { CreateProjectComponent } from './pages/proyectos/create-project/create-project.component';
import { CreateIdeaComponent } from './pages/proyectos/create-idea/create-idea.component';
import { IdeasComponent } from './pages/proyectos/ideas/ideas.component';
import { CreateViewGeneralComponent } from './pages/create-view-general/create-view-general.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    NotificacionesComponent,
    BasicProjectViewComponent,
    BasicProjectCommentComponent,
    BasicUnirmeComponent,
    BasicDonateComponent,
    CreateViewGeneralComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NbToastrModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NbListModule,
    NbUserModule,
    NbInputModule,
    // NbEvaIconsModule,0
    NbFormFieldModule,
    NbSelectModule,
    NbLayoutModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
