import { Component, OnInit,Output,ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { IncidentEncoursService } from '../incident-encours.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tableauindicateur',
  templateUrl: './tableauindicateur.component.html',
  styleUrls: ['./tableauindicateur.component.css']
})
export class TableauindicateurComponent implements OnInit {

  secondes: number;
  @ViewChild('MessageError') private messageError;
  @Output()  
  domainEncours:any;
  flague=true;
  //on peut utilisé domainEncours sans domainEditeur faisons filtar par editeur 
  @Output()  
  domainEditeur:any;
  @Output() 
  domainRecus:any;
  @Output()
  domainResolus:any;
  encoursfiltre=[{}]
  editeurfiltre=[{}]
  t:any;
  Totale={Tencours:0,Tediteur:0,Trecus:0,Tp:0,Taffec:0,sla:0,ola:0,olanko:0,oladeuxCinque:0,oladeuxCinqueplus:0,resolus:0,resolusHorsOla:0}
  resultats=[];
  constructor(private incidentEncoursService:IncidentEncoursService,private spinnerService:Ng4LoadingSpinnerService) { }
  ngOnInit() {
    this.spinnerService.show();
    this.AfficherResulta()
    const MinuteCounter = interval(1200000);
    MinuteCounter.subscribe(n=>{
    this.spinnerService.show();
    this.AfficherResulta()
    this.Totale={Tencours:0,Tediteur:0,Trecus:0,Tp:0,Taffec:0,sla:0,ola:0,olanko:0,oladeuxCinque:0,oladeuxCinqueplus:0,resolus:0,resolusHorsOla:0}
    })
    
  }
 
  SendbEncours(encours){
    this.encoursfiltre=[{}]
    encours.forEach(element => {
      if(!element.groupeEncharge.includes("EDITEUR ")){
        this.encoursfiltre.unshift(element)
      }

    });
    this.domainEncours=this.encoursfiltre
  }

  SendbEditeur(encours){
    this.editeurfiltre=[{}]
    encours.forEach(element => {
      if(element.groupeEncharge.includes("EDITEUR ")){
        this.editeurfiltre.unshift(element)
      }

    });
    this.domainEditeur=this.editeurfiltre
  }
  SendRecus(recus){
    this.domainRecus=recus;
  }
  SendResolus(resolus){
  this.domainResolus=resolus
  }
   

setVisible(){
  this.flague=!this.flague
}

AfficherResulta(){
  return this.incidentEncoursService.getTableResultat().subscribe(res=>{
    this.resultats=res.json();
    // console.log(this.resultats)
    this.resultats.forEach(element => {
      // this.Totale.Tencours=this.Totale.Tencours+element;
     this.Totale.Tencours+=element[2].encours;
     this.Totale.Tediteur+=element[2].editeur;
     this.Totale.Trecus+=element[2].recu;
     this.Totale.Tp+=element[2].p1;
     this.Totale.Taffec+=element[2].nonAffec;
     this.Totale.sla+=element[2].slako;
     this.Totale.ola+=element[2].olako;
     this.Totale.olanko+=element[2].olanko;
     this.Totale.oladeuxCinque+=element[2].deux_cinq;
     this.Totale.oladeuxCinqueplus+=element[2].deux_cinq_plus;
     this.Totale.resolus+=element[2].resolu;
     this.Totale.resolusHorsOla+=element[2].resoluHorsOla;
    });
    },erro=>{this.messageError.show()});
}
getColor(valeur) {
  if(valeur>=0 && valeur<=4) {
    return '#0A9F32';
  } else if(valeur>=5 && valeur<10) {
    return '#FFC300';
  }else{
    return '#F3403B';
  }
}

getValue(value){
  return "T"+value;
}



}