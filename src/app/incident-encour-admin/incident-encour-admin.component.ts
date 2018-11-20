import { Component, OnInit ,OnDestroy} from '@angular/core';
import { IncidentEncoursService } from '../incident-encours.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-incident-encour-admin',
  templateUrl: './incident-encour-admin.component.html',
  styleUrls: ['./incident-encour-admin.component.css']
})
export class IncidentEncourAdminComponent implements OnInit,OnDestroy {

  constructor(private incidentEncoursService:IncidentEncoursService) { }
  dtTrigger: Subject<any> = new Subject();
  dtOptions:DataTables.Settings={};
  Encours=[];
  NomberEncours=0;
  ngOnInit() {
    this.getAllEncours();
    this.dtOptions={
      pagingType:'full_numbers',
      paging:true,
      pageLength:5,
    
    }

    // this.NomberEncours=this.Encours.length;
  }
  getAllEncours(){
    return this.incidentEncoursService.getAllIncidentEncours().subscribe(data=>{
     this.Encours=data.json();
     this.dtTrigger.next();
     this.NomberEncours=this.Encours.length;
    });

    
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
