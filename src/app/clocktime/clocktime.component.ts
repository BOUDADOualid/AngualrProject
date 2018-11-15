import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-clocktime',
  templateUrl: './clocktime.component.html',
  styleUrls: ['./clocktime.component.css']
})
export class ClocktimeComponent implements OnInit {
  maroc ="./assets/images/morocco.png";
  france="./assets/images/france.png";
  Atos="./assets/images/logoAtos.png";
  Auchan="./assets/images/Auchan.png";
  

  today: any;
  todayfr:any
  constructor() { }

  ngOnInit() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>{
      this.today= moment();
      this.todayfr=moment().add(1,'h')
    });

  }

}
//   let now = moment(); // add this 2 of 4
    // console.log('hello world', now.format()); // add this 3 of 4
    // console.log(now.add(7, 'days').format()); // add this 4of 4
      // console.log(moment());