import { Component, OnInit, Input } from '@angular/core';
import { DomainServiceService } from '../domain-service.service';
import{Router,Params,ActivatedRoute} from '@angular/router';
import { reject } from 'q';
@Component({
  selector: 'app-edit-domain-param',
  templateUrl: './edit-domain-param.component.html',
  styleUrls: ['./edit-domain-param.component.css']
})
export class EditDomainParamComponent implements OnInit {

  constructor(private servicedomain:DomainServiceService,private router:ActivatedRoute) { }

lastUpdate=new Promise((resolve,reject)=>{
  const date =new Date();
  setTimeout(()=>{
    resolve(date);
  },2)
})


Domain={id:0,nom:'',nomEditeur:'',list_Indicateur:{}};
  ngOnInit() {
    this.router.params.subscribe((params) => {
        const id = +params['id'];
         console.log(id);
         this.getDomain(id);
    })};

    getDomain(id){
      return this.servicedomain.getDomain(id).subscribe((domain)=>{
        this.Domain=domain.json();
        console.log(domain);
      }
      )};

    
}
