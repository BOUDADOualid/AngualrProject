import { Component, OnInit } from '@angular/core';
import { ExtractionDateService } from '../extraction-date.service';
import * as moment from 'moment';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serviceDateExtraction:ExtractionDateService) { }
  dateExtraction={id:0,dataExtraction:''};
  exdate:any;
  ngOnInit() {
    this.getExtractDate();
  }


  getExtractDate(){
    return this.serviceDateExtraction.getExtractionDate().subscribe(res=>{
      this.dateExtraction=res.json()
      console.log(this.dateExtraction.dataExtraction)
    // this.exdate = new moment(this.dateExtraction.dataExtraction);
     this.exdate =   moment(this.dateExtraction.dataExtraction).locale('fr').format('LLLL');
    // moment().format('LLLL');
   //  console.log( this.exdate);
     
    });
    

  }

}
