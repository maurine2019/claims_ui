import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


loginform= new FormGroup({
  username: new FormControl(),
  password : new FormControl()
})

  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(): void {
    this.checkAuthentication();
  }


checkAuthentication(){
  if(
    this.authService.isAuthenticated()
  ){
  this.router.navigate(["home"]);
  }
}

// saveTokenSession(token: string): void {
//   this.authService.saveToken(token);
// }

// getTokenSession(): string | null {
//   return this.authService.getToken();
// }

// removeTokenSession(): void {
//   this.authService.removeToken();
// }

  login() {
    const username=this.loginform.value.username;
    const password=this.loginform.value.password;
    this.authService.login(username,password).subscribe((res:any)=>{
        console.log(res);
        this.authService.setToken(res.access_token);
        this.checkAuthentication();
    }),(error:HttpErrorResponse)=>{
        alert(error.message);
    }
    }



}
