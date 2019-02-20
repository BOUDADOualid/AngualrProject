import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner'
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DomainComponent } from './domain/domain.component';
import { EditDomainParamComponent } from './edit-domain-param/edit-domain-param.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { MessageInfoComponent } from './message-info/message-info.component';
import { FooterComponent } from './footer/footer.component';
import { TableauindicateurComponent } from './tableauindicateur/tableauindicateur.component';
import { InfodomainComponent } from './infodomain/infodomain.component';
import { InfodomainRecusComponent } from './infodomain-recus/infodomain-recus.component';
import { ClocktimeComponent } from './clocktime/clocktime.component';
import { ListMesssageComponent } from './list-messsage/list-messsage.component';
import { InfodomainEditeurComponent } from './infodomain-editeur/infodomain-editeur.component';
import { InfoDateComponent } from './info-date/info-date.component';
import { InfoDateDeuxCinqComponent } from './info-date-deux-cinq/info-date-deux-cinq.component';
import { AuthGuard } from './auth.guard';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { InfoResolusComponent } from './info-resolus/info-resolus.component';
import { IncidentRsolusAdminComponent } from './incident-rsolus-admin/incident-rsolus-admin.component';
import{IncidentEncourAdminComponent} from'./incident-encour-admin/incident-encour-admin.component';
import { NoteFoundComponent } from './note-found/note-found.component';
import { GraphiqueBarComponent } from './graphique-bar/graphique-bar.component';
import { LoadComponent } from './load/load.component';
import { InfoResolushorsOlaComponent } from './info-resolushors-ola/info-resolushors-ola.component';

const appRoutes: Routes=[
  {path: '', redirectTo: '/TableauIndicateur',pathMatch: 'full'},
  {path:'domains',component:DomainComponent,canActivate: [AuthGuard]},
  {path:'auth',component:AuthComponent},
  {path:'load',component:LoadComponent},
  {path:'TableauIndicateur',component:TableauindicateurComponent},
  {path:'paramdomain/:id',component:EditDomainParamComponent,canActivate: [AuthGuard]},
  { path: 'not-found', component: NoteFoundComponent },
  { path: '**', redirectTo: 'not-found' }
]
MessageInfoComponent

@NgModule({
  declarations: [
    AppComponent,
    DomainComponent,
    NavbarComponent,
    AuthComponent,
    EditDomainParamComponent,
    DashboardComponent,
    MessageInfoComponent,
    FooterComponent,
    TableauindicateurComponent,
    InfodomainComponent,
    InfodomainRecusComponent,
    ClocktimeComponent,
    ListMesssageComponent,
    InfodomainEditeurComponent,
    InfoDateComponent,
    InfoDateDeuxCinqComponent,
    GraphiquesComponent,
    InfoResolusComponent,
    IncidentEncourAdminComponent,
    IncidentRsolusAdminComponent,
    NoteFoundComponent,
    GraphiqueBarComponent,
    LoadComponent,
    InfoResolushorsOlaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    DataTablesModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxJsonViewerModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    NgFlashMessagesModule.forRoot(),
    SweetAlert2Module.forRoot(),
    SweetAlert2Module.forRoot({
    buttonsStyling: false,
    customClass: 'modal-content',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonClass: 'btn'}),
    SweetAlert2Module,
    
  ],
  bootstrap: [AppComponent],
  entryComponents:[],
  providers:[AuthGuard]
})
export class AppModule { }
