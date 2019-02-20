import { Component,OnDestroy, OnInit,ViewChild } from '@angular/core';
import { DomainServiceService } from '../domain-service.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
// interface Domain {
//   id: number;
//   nom : string;
//   nomEditeur : string;
// }
// import "rxjs/add/operator/map";
@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnDestroy {
@ViewChild('MessageError') private messageError;

  logoutimage ="./assets/images/logout.png";
  dtTrigger: Subject<any> = new Subject();
  dtOptions:DataTables.Settings={};
  Domains=[];

  //déclration variable état
  etat=false;
  operation = true;
  //déclration variable
  domain={
    id:null,
    nom: " ",
    nomEditeur: " "
  };
 

  id: string;
  constructor(private serviceDomain:DomainServiceService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,public authService: AuthService,
    private spinnerService:Ng4LoadingSpinnerService
    )
     { }

     ngOnInit():void{
      this.id = localStorage.getItem('token');
      this.dtOptions={
        pagingType:'full_numbers',
        paging:true,
        pageLength:10,

      }
      this.affichierListDomain()

    //  this.affichierListDomainPage()
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/auth']);
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  setEtat() {
    this.domain = {
    id:null,
    nom: "",
    nomEditeur:""
    }
    this.operation = true;
    this.etat = !this.etat;
  }

  editDomain(domain) {
    this.operation = false
    this.domain = domain;
    this.etat = true;
  }
affichierListDomainPage(){
  this.serviceDomain.getListPage().subscribe((res)=>{


 })
}
 affichierListDomain(){
  this.spinnerService.show();
  return this.serviceDomain.getListDomain().pipe(map(res=>res.json())).subscribe(data=>{
    this.Domains=data;
    this.dtTrigger.next();
    this.spinnerService.hide();
  },erro=>{this.messageError.show()});

  }
  //supprimer Domain
 supprimerDomain(id,domain){
  return this.serviceDomain.RomveDomain(id).subscribe((res)=>{
  //  console.log(res);
    let i=this.Domains.indexOf(domain)
    this.Domains.splice(i,1)
    this.message("suppression effectué avec succès")
    this.router.navigateByUrl('/load',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/domains']);
    })
    
 })

};
 modifierDomaian(){
  //  console.log(this.domain.id);
  //  console.log(this.domain);
  return this.serviceDomain.updateDomain(this.domain.id,this.domain).subscribe((res)=>{
    // console.log(res);
    this.setEtat();
    this.message("Modfication effectué avec succès")
    
  })
 }


 //ajouter Domain
 AjouterDomain(){
 return this.serviceDomain.saveDomain(this.domain).subscribe((res)=>{
  // console.log(res);
  this.domain={
    id:null,
    nom: " ",
    nomEditeur: " "
  };
    this.message("Nouvelle Domain Ajouté")
    this.router.navigateByUrl('/load',{skipLocationChange:true}).then(()=>{
    this.router.navigate(['/domains']);
    })
})

};

//message operation validé
message(message){
this.ngFlashMessageService.showFlashMessage({
  messages: [message],
  dismissible: false,
  timeout: 2000,
  type: 'success'
});
}
}





