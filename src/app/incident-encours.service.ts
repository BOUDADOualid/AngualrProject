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

}
