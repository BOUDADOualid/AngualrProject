import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-list-messsage',
  templateUrl: './list-messsage.component.html',
  styleUrls: ['./list-messsage.component.css']
})
export class ListMesssageComponent implements OnInit {

  constructor(private servicemessage:MessageserviceService) { }
 messages=[];
  ngOnInit() {
    this.getAll()
  }

getAll(){
return this.servicemessage.affichierAll().subscribe((res)=>{
  this.messages=res.json();
  console.log(res);
})


}

checkedValue(value){
  if(value!=true){
    return " ";
  }else{
    return "checked";
  }
}

}
