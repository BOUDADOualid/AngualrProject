import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class IncidentEncoursService {

  constructor(private http:Http) {  
  }
url="http://localhost:8080";



getTableResultat(){
return this.http.get(this.url+"/api/resultatsbydomain")
}

getAllStatisticDomain(){
  return this.http.get(this.url+"/api/static/resultats")
}

getAllIncidentResolus(){
  return this.http.get(this.url+"/api/Resolus")
}

getAllIncidentEncours(){
  return this.http.get(this.url+"/api/incidents")
}
}
