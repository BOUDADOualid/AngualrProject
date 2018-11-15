import { Component, OnInit,Input } from '@angular/core';
import { interval } from 'rxjs';
import * as moment from 'moment';
@Component({
  selector: 'app-info-date-deux-cinq',
  templateUrl: './info-date-deux-cinq.component.html',
  styleUrls: ['./info-date-deux-cinq.component.css']
})
export class InfoDateDeuxCinqComponent implements OnInit {
 

  @Input()
  domains_encours=[{deadLineGrp:""}]
  
  today1:any;
  today2:any;
  todayarabe:any;
  todayfrance:any;
  strat:any;
  constructor() { }

  ngOnInit() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>{
    this.today1=moment().locale('en-gb').format('LLLL');
    this.today2=moment().locale('fr').format('LTS');
    this.todayfrance=moment().locale('fr').format('LL');
    this.strat=moment();
    });  
  }
 
DiffDate(deadLineGrp,actionDateCreation){
// let end=moment(deadLineGrp);
let resultat=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').diff(moment(actionDateCreation,'DD-MM-YYYY HH:mm:ss'))
let dateole2_5=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').add(resultat*2.5,'ms')
let resultat1=moment(dateole2_5,'DD-MM-YYYY HH:mm:ss').diff(moment(this.strat,'DD-MM-YYYY HH:mm:ss'))
var hum=moment.duration(resultat1).humanize();
return hum;
}


 
DateOla2_5(deadLineGrp,actionDateCreation){
  let resultat=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').diff(moment(actionDateCreation,'DD-MM-YYYY HH:mm:ss'))
  let dateole2_5=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').add(resultat*2.5,'ms')
  let dateole2_5_2=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').add(resultat*2.5,'ms').format('LTS')
  let ola2_5=moment(dateole2_5,'DD-MM-YYYY HH:mm:ss').locale('fr').format('L')
  return ola2_5+" "+dateole2_5_2;
  }
DiffDatemiliscond(deadLineGrp,actionDateCreation){
// let end=moment(deadLineGrp);
let resultat=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').diff(moment(actionDateCreation,'DD-MM-YYYY HH:mm:ss'))
let dateole2_5=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').add(resultat*2.5,'ms')
let resultat1=moment(dateole2_5,'DD-MM-YYYY HH:mm:ss').diff(moment(this.strat,'DD-MM-YYYY HH:mm:ss'))
return resultat1;
  }

}
