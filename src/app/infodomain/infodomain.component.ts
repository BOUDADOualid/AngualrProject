import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-infodomain',
  templateUrl: './infodomain.component.html',
  styleUrls: ['./infodomain.component.css']
})
export class InfodomainComponent implements OnInit {

  @Input()domains_encours=[{}]
  

  constructor() { }

  ngOnInit() {
    // console.log(this.domains_encours);
  }


}
