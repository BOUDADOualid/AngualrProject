import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../login';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import { element } from '@angular/core/src/render3/instructions';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  Atos="./assets/images/logoAtos.png";
  Auchan="./assets/images/Auchan.png";
  @ViewChild('Authentifier') private Authentifier;
  @ViewChild('MessageError') private MessageError;
  TabAdmin:[{login:'',motDePasse:''}]
  model: ILogin = { userid: "", password: "" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  admin:ILogin={ userid: "", password: "" };
  isvrai=false;
  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService,private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/domains';
    this.authService.logout();
    this.listAdmin();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  Message(message){
    this.ngFlashMessageService.showFlashMessage({
      messages: [message], 
      dismissible: false, 
      timeout: 2000,
      type: 'danger'
    });
  }

  login() {

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    else{
      this.TabAdmin.forEach(element=>{
      if(this.f.userid.value == element.login && this.f.password.value == element.motDePasse && this.isvrai==false){
        this.Authentifier.show()        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
        this.isvrai=true;
        console.log(element)
      }
    })
    if(this.isvrai==false){
      this.message = "Nom utilisateur ou Mot da passe non validé";
      this.Message(this.message)     
    }     
    }    
}
listAdmin(){
  return this.authService.getListAdmin().pipe(map(res=>res.json())).subscribe(data=>{
     this.TabAdmin=data;
  },erro=>{this.MessageError.show()})
}

}

