import { Component, OnInit } from '@angular/core';
import { ResolusService } from '../resolus.service';

@Component({
  selector: 'app-graphique-bar',
  templateUrl: './graphique-bar.component.html',
  styleUrls: ['./graphique-bar.component.css']
})
export class GraphiqueBarComponent implements OnInit {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barStaic:[{id:0,nomDomain:'',countEncours:0,countResolus:0}]
  public barChartLabels=[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
  public bidDistributionStatColors:{}[]= [ { backgroundColor: ['#DAF7A6', '#FFC300', '#FF5733','#C70039', '#900C3F', '#581845','#00ff40', '#00bfff', '#4000ff','#00ffff','#b30000','#b34d4d', '#996666','#ff0080'] } ];
  public barChartData:any[] = [
    {data:[], label: 'Encours A'},
    {data:[], label: 'Resolus B'}
  ];
  constructor(private resolusService:ResolusService) { }

  ngOnInit() {
    this.getStaticBar();
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


  getStaticBar(){
    return this.resolusService.getAllStatisticBarDomain().subscribe(res=>{
      this.barStaic=res.json();
      this.barStaic.forEach(element=>{
      this.barChartLabels.push(element.id)
      this.barChartData[0].data.push(element.countEncours);
      this.barChartData[1].data.push(element.countResolus);
      })


    })
  }
}