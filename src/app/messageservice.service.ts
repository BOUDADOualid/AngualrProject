import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor(private http:Http) { }
  url="http://localhost:8080"

ajouterMessage(message){
return this.http.post(this.url+"/api/message",message)
}

affichierAll(){
return this.http.get(this.url+"/api/messages")
}


}
