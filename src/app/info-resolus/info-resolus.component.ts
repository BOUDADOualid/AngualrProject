import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-info-resolus',
  templateUrl: './info-resolus.component.html',
  styleUrls: ['./info-resolus.component.css']
})
export class InfoResolusComponent implements OnInit {

  @Input()domains_resolus=[{}]
  constructor() { }

  ngOnInit() {
  }

}
