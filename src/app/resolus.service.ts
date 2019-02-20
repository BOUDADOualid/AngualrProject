import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ResolusService {

  constructor(private http:Http) {}
  url=environment.apiUrl;
  getAllResolus(){
    return this.http.get(this.url+"/api/Resolus");
  }

  getAllStatisticBarDomain(){
    return this.http.get(this.url+"/api/static/resultatsbar")
  }
}
