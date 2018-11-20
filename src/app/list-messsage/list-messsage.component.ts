import { Component, OnInit,OnDestroy} from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-messsage',
  templateUrl: './list-messsage.component.html',
  styleUrls: ['./list-messsage.component.css']
})
export class ListMesssageComponent implements OnInit,OnDestroy {

  dtTrigger: Subject<any> = new Subject();
  dtOptions:DataTables.Settings={};
  constructor(private servicemessage:MessageserviceService,private router:Router) { }
 messages=[];
  ngOnInit() {
    this.getAll();
    this.dtOptions={
      pagingType:'full_numbers',
      paging:true,
      pageLength:5,
    
    }
  }

getAll(){
return this.servicemessage.affichierAll().subscribe((res)=>{
  this.messages=res.json();
  this.dtTrigger.next();
})
}

supprimeMessage(id){
  return this.servicemessage.removeMessgae(id).subscribe(res=>{
    this.router.navigateByUrl('/auth',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/domains']);
     
        })
  })
}
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}
checkedValue(value){
  if(value!=true){
    return " ";
  }else{
    return "checked";
  }
}

}
