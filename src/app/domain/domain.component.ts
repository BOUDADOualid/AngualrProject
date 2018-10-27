import { Component,OnDestroy, OnInit } from '@angular/core';
import { DomainServiceService } from '../domain-service.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
  
  dtTrigger: Subject<any> = new Subject();
  dtOptions:DataTables.Settings={};



  Domains=[];
 
  //déclration variable état
  etat=false;
  operation = true;
  //déclration variable 
  domain={
    nom: " ",
    nomEditeur: " "
  };
  
  constructor(private serviceDomain:DomainServiceService,
    private ngFlashMessageService: NgFlashMessageService,
    private router:Router,
    )
     { }
      
     ngOnInit():void{
      this.debug();
      this.dtOptions={
        pagingType:'full_numbers',
        paging:true,
        pageLength:5,
      
      }
      this.affichierListDomain()
    
    //  this.affichierListDomainPage()
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  setEtat() {
    this.domain = {
    nom: " ",
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
  return this.serviceDomain.getListDomain().pipe(map(res=>res.json())).subscribe(data=>{
    this.Domains=data;
    this.dtTrigger.next();
    // this.pageable=Data.pageable;
    // this.Nomberpage=new Array(Data.totalPages);
    // console.log(this.pageable);
    // this.pageb = data.totalpages
  })
  
  }
  // .subscribe((domain)=>{
  //   console.log(domain.json());
  //   this.Domains=domain.json();
  // })
  // @ViewChild('valide') private deleteSwal: SwalComponent;

  //supprimer Domain
 supprimerDomain(id){
  console.log('biennnnnnnnnnnnnnn');
  return this.serviceDomain.RomveDomain(id).subscribe((res)=>{
   console.log(res);
    this.message("Domain Supprimé par")
  
 })
    
};


 //ajouter Domain
 AjouterDomain(){
 return this.serviceDomain.saveDomain(this.domain).subscribe((res)=>{
  console.log(res);
  this.domain={
    nom: " ",
    nomEditeur: " "
  };
     this.message("Nouvelle Domain Ajouté")
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
 this.router.navigateByUrl('/auth',{skipLocationChange:true}).then(()=>{
 this.router.navigate(['/domains']);

   })
}
debug(){
console.log("rerererererere");

}
}





