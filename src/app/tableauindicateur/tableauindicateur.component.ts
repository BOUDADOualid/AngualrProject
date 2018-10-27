import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { map } from 'rxjs/operators';
import { IncidentEncoursService } from '../incident-encours.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-tableauindicateur',
  templateUrl: './tableauindicateur.component.html',
  styleUrls: ['./tableauindicateur.component.css']
})
export class TableauindicateurComponent implements OnInit {

  secondes: number;

  @Output()  
  domainEncours:any;
  
  @Output() 
  domainRecus:any;
  
  today: number = Date.now();
  
  Totale={
    Tencours:0,
    Tediteur:0,
    Trecus:0,
    Tp:0,
    Taffec:0,
    sla:0,
    ola:0,
    olanko:0,
    oladeuxCinque:0,
    oladeuxCinqueplus:0,
  }
  resultats=[];
  constructor(private incidentEncoursService:IncidentEncoursService,private spinnerService:Ng4LoadingSpinnerService) { }
  ngOnInit() {
    this.spinnerService.show();
    this.AfficherResulta();
    
  }
 
  SendbEncours(encours){
    this.domainEncours=encours;
  }


  SendRecus(recus){
    this.domainRecus=recus;
  }

AfficherResulta(){

  return this.incidentEncoursService.getTableResultat().subscribe(res=>{
    console.log(res.json());
    this.resultats=res.json();
    
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
    });

    

    });
}
  
     

}