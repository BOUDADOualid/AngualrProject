 import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   

  image ="./assets/images/email.png";
  monitoring="./assets/images/monitoring.png";
  registration ="./assets/images/registration.png";
  incident ="./assets/images/information.png";

  constructor() { }

  ngOnInit() {
  }

}
