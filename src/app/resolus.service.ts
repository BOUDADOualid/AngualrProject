import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ResolusService {

  constructor(private http:Http) {}
  url="http://localhost:8080";

  getAllResolus(){
    return this.http.get(this.url+"/api/Resolus");
  }


  



}
