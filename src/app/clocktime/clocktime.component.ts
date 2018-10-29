import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clocktime',
  templateUrl: './clocktime.component.html',
  styleUrls: ['./clocktime.component.css']
})
export class ClocktimeComponent implements OnInit {
  maroc ="./assets/images/morocco.png";
  france="./assets/images/france.png";
  Atos="./assets/images/logoAtos.png";


  today: any;
  constructor() { }

  ngOnInit() {
    const secondsCounter = interval(1000);
    secondsCounter.subscribe(n =>{
      this.today= Date.now();
    });

  }

}
