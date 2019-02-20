import { Http} from '@angular/http';
import { environment }from '../environments/environment';import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtractionDateService {

  constructor(private http:Http) { }
  url=environment.apiUrl;

 getExtractionDate(){
   return this.http.get(this.url+"/api/extract/1");
 }


}
