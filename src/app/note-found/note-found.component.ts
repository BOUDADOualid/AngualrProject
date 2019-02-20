import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-found',
  templateUrl: './note-found.component.html',
  styleUrls: ['./note-found.component.css']
})
export class NoteFoundComponent implements OnInit {
  
  notefound ="./assets/images/found.png";
  constructor() { }

  ngOnInit() {
  }

}
