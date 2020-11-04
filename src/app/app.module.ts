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
import { NbButtonModule, NbCardModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule, NbThemeModule, NbUserModule} from '@nebular/theme';
import { BasicProjectViewComponent } from './pages/basic-project-view/basic-project-view.component';
import { BasicProjectCommentComponent } from './pages/basic-project-comment/basic-project-comment.component';
import { BasicUnirmeComponent } from './pages/basic-unirme/basic-unirme.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { BasicDonateComponent } from './pages/basic-donate/basic-donate.component';

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
    BasicDonateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbDialogModule.forRoot(),
    NbListModule,
    NbUserModule,
    NbInputModule,
    // NbEvaIconsModule,
    NbFormFieldModule,
    NbSelectModule,
    NbLayoutModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
