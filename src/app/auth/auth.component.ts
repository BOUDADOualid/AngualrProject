import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../login';
import { AuthService } from '../auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  @ViewChild('Authentifier') private Authentifier;
  model: ILogin = { userid: "admin", password: "admin123" };
  loginForm: FormGroup;
  message: string;
  returnUrl: string;
  admin:ILogin={ userid: "", password: "" };
  constructor(private formBuilder: FormBuilder,private router: Router, public authService: AuthService,private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/domains';
    this.authService.logout();
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
      if(this.f.userid.value == this.model.userid && this.f.password.value == this.model.password){
        this.Authentifier.show()        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.f.userid.value);
        this.router.navigate([this.returnUrl]);
      }
      else{
        this.message = "Nom utilisateur ou Mot da passe non validé";
        this.Message(this.message)     
      }
    }    
}

}

