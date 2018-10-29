import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner'
import { DataTablesModule } from 'angular-datatables';
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


const appRoutes: Routes=[
  {path: '', redirectTo: '/auth',pathMatch: 'full'},
  {path:'domains',component:DomainComponent},
  {path:'auth',component:AuthComponent},
  {path:'TableauIndicateur',component:TableauindicateurComponent},
  {path:'paramdomain/:id',component:EditDomainParamComponent}
  
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
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    DataTablesModule,
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
  providers:[]
})
export class AppModule { }
