import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-infodomain-recus',
  templateUrl: './infodomain-recus.component.html',
  styleUrls: ['./infodomain-recus.component.css']
})
export class InfodomainRecusComponent implements OnInit {
   

  @Input()
  domain_recus=[{}]
  constructor() { }

  ngOnInit() {
  }

}
