import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-infodomain-editeur',
  templateUrl: './infodomain-editeur.component.html',
  styleUrls: ['./infodomain-editeur.component.css']
})
export class InfodomainEditeurComponent implements OnInit {

  constructor() { }
  @Input()
  domain_recus_editeur=[{}]
  ngOnInit() {
  }

}
