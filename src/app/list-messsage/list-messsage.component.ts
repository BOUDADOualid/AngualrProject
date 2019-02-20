import { Component, OnInit,OnDestroy} from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { elementStart, element } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-list-messsage',
  templateUrl: './list-messsage.component.html',
  styleUrls: ['./list-messsage.component.css']
})
export class ListMesssageComponent implements OnInit,OnDestroy {

  dtTrigger: Subject<any> = new Subject();
  dtOptions:DataTables.Settings={};
  constructor(private servicemessage:MessageserviceService,private router:Router) { }
 messages=[{id:null,messsage:'',etat:null}];
 checked=[];
  ngOnInit() {
    this.getAll();
    this.dtOptions={
      pagingType:'full_numbers',
      paging:true,
      pageLength:10,
    
    }
   
  }

getAll(){
return this.servicemessage.affichierAll().subscribe((res)=>{
  this.messages=res.json();
  this.dtTrigger.next();
})
}

supprimeMessage(id,message){
  return this.servicemessage.removeMessgae(id).subscribe(res=>{
  var i=this.messages.indexOf(message)
  this.messages.splice(i,1)
  })
}
ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}
checkedValue(value){


  this.checked.push(value);


  console.log(this.checked);
}

deselecteAll(){
  this.messages.forEach(element=>{
    element.etat=false
  })
}
selectAll(){
    this.messages.forEach(element=>{
      element.etat=true
    })
}
deleteAll(){

  this.messages.forEach(item=>{
    if(item.etat==true){
      this.servicemessage.removeMessgae(item.id).subscribe(res=>{
      var i=this.messages.indexOf(item)
      this.messages.splice(i,1)
      })
    }
  })
  
  
}
}