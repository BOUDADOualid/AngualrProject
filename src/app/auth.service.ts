import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { Http} from '@angular/http';
import { environment }from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url=environment.apiUrl;
  constructor(private http:Http) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  } 


getListAdmin(){
  return this.http.get(this.url+"/api/admins");
}

}