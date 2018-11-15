import { Component, OnInit,Input} from '@angular/core';
import { interval } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-info-date',
  templateUrl: './info-date.component.html',
  styleUrls: ['./info-date.component.css']
})
export class InfoDateComponent implements OnInit {
   
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

DiffDate(deadLineGrp){
// let end=moment(deadLineGrp);
let resultat=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').diff(moment(this.strat,'DD-MM-YYYY HH:mm:ss'))
var hum=moment.duration(resultat).humanize();
return hum;
}
DiffDatemiliscond(deadLineGrp){
// let end=moment(deadLineGrp);
let resultat=moment(deadLineGrp,'DD-MM-YYYY HH:mm:ss').diff(moment(this.strat,'DD-MM-YYYY HH:mm:ss'))
return resultat;
  }



}
