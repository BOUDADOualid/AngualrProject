import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DomainServiceService {
  constructor(private http:Http) { }
  url="http://localhost:8080"

  getListDomain(){
    return this.http.get(this.url+"/api/domains/");
  }
  

  RomveDomain(id){
     return this.http.delete(this.url+"/api/domain/"+id)
  }
 
saveDomain(domain){
  return this.http.post(this.url+"/api/domain",domain)
}
getListPage(){
  return this.http.get("http://localhost:8080/api/chercherDomain/");
}

  // this.url+"?mc="+motCle+"&size="+size+"&page="+page
  
getDomain(id){
  return this.http.get(this.url+"/api/domains/"+id)
}


}
  