import { Component, OnInit } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private servicemessage:MessageserviceService) { }
  message:{message:""};
  messages=[];
  i:number=0;
  ngOnInit() {
    this.getAllMessage();
    const secondsCounter = interval(4000);
    secondsCounter.subscribe(n=>{
       if(this.i<this.messages.length){
      this.message=this.messages[this.i].message;
      console.log(this.message)
      console.log(this.i)
      this.i++;
    }else{
      this.i=0;
    }
    })
   
  }  
 
    
     

  getAllMessage(){
    return this.servicemessage.affichierAll().subscribe((res)=>{
      this.messages=res.json(); 
      this.messages.forEach(element=>{
       
      })    
      })
      


  
}


}
