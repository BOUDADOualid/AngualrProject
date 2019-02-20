import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentEncoursService {

  constructor(private http:Http) {  
  }
  url=environment.apiUrl;

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
