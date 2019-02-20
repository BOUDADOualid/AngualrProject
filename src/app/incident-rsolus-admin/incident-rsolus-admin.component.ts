import { Component,OnDestroy, OnInit } from '@angular/core';
import { IncidentEncoursService } from '../incident-encours.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-incident-rsolus-admin',
  templateUrl: './incident-rsolus-admin.component.html',
  styleUrls: ['./incident-rsolus-admin.component.css']
})
export class IncidentRsolusAdminComponent implements OnInit,OnDestroy {
  

 
  dtTrigger: Subject<any> = new Subject();
  dtOptions:DataTables.Settings={};
  Resolus=[];
  NomberResolus=0;
  constructor(private incidentEncoursService:IncidentEncoursService) { }
   
 

  ngOnInit() {
    this.getAllResolus()
    this.dtOptions={
      pagingType:'full_numbers',
      paging:true,
      pageLength:10,
    
    }
  }
  
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getAllResolus(){
    return this.incidentEncoursService.getAllIncidentResolus().subscribe(data=>{
     this.Resolus=data.json();
     this.dtTrigger.next();
     this.NomberResolus=this.Resolus.length;
    });

    
  }
}
