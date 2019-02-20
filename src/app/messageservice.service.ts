import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment }from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor(private http:Http) { }
  url=environment.apiUrl;

ajouterMessage(message){
return this.http.post(this.url+"/api/message",message)
}

affichierAll(){
return this.http.get(this.url+"/api/messages")
}


removeMessgae(id){
 return this.http.delete(this.url+"/api/message/"+id)
}

}
