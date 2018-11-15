import { Component, OnInit } from '@angular/core';
import { DomainServiceService } from '../domain-service.service';
import { IncidentEncoursService } from '../incident-encours.service';

@Component({
  selector: 'app-graphiques',
  templateUrl: './graphiques.component.html',
  styleUrls: ['./graphiques.component.css']
})
export class GraphiquesComponent implements OnInit {
  

  static:any=[{}]
doughnutChartLabels:string[]=[];
doughnutChartData:number[]=[];
public bidDistributionStatColors:{}[]= [ { backgroundColor: ['#DAF7A6', '#FFC300', '#FF5733','#C70039', '#900C3F', '#581845','#00ff40', '#00bfff', '#4000ff','#00ffff','#b30000','#b34d4d', '#996666','#ff0080'] } ];
  coleurs:any=[]
  public doughnutChartType:string = 'pie';
  
  constructor(private serviceStatstic:IncidentEncoursService) { }
  
  ngOnInit() {
    this.getAllDomainName()
  }
  
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public getAllDomainName(){
    let i=0;
    return this.serviceStatstic.getAllStatisticDomain().subscribe(data=>{
      this.static=data.json();
      console.log(this.static)
      this.static.forEach(element => {
      // this.doughnutChartLabels.unshift(element.nomDomain);
      // this.doughnutChartData.unshift(element.countEncours);
      this.doughnutChartLabels[i]=element.nomDomain;
      this.doughnutChartData[i]=element.countEncours;
      // this.coleurs[i] = 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
       i++;
       });

       console.log(this.doughnutChartLabels);
       console.log(this.doughnutChartData);
  });

}
}