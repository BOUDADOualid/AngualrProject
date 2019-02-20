import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info-resolushors-ola',
  templateUrl: './info-resolushors-ola.component.html',
  styleUrls: ['./info-resolushors-ola.component.css']
})
export class InfoResolushorsOlaComponent implements OnInit {
  @Input()
  domains_resolus_horsola=[{}]
  constructor() { }

  ngOnInit() {
  }

}
