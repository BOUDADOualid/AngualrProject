import { Component, OnInit, ViewChild} from '@angular/core';
import { MessageserviceService } from '../messageservice.service';

@Component({
  selector: 'app-message-info',
  templateUrl: './message-info.component.html',
  styleUrls: ['./message-info.component.css']
})
export class MessageInfoComponent implements OnInit {
  
  @ViewChild('AjouterSwal') private AjouterSwal;
  msg={
  message:""
  }
constructor(private servicemessage:MessageserviceService) { }
  
  ngOnInit() {
    }
Addmessage(){
return this.servicemessage.ajouterMessage(this.msg).subscribe((res)=>{
  console.log(res);
  this.msg={
    message:""
  }
  this.AjouterSwal.show();
  
})
};
}