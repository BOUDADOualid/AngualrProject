import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { environment }from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DomainServiceService {
  constructor(private http:Http) { }
  url=environment.apiUrl;

getListDomain(){
    return this.http.get(this.url+"/api/domains/");
  }
  

RomveDomain(id){
     return this.http.delete(this.url+"/api/domain/"+id);
  }
 
saveDomain(domain){
  return this.http.post(this.url+"/api/domain",domain);
}
getListPage(){
  return this.http.get(this.url+"/api/chercherDomain/");
}


  
getDomain(id){
  return this.http.get(this.url+"/api/domains/"+id);
}


updateDomain(id,domain){
  return this.http.put(this.url+"/api/domain/"+id,domain)
}

}
  