import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { RoadsService } from '../RoadsService';

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

  constructor(private service:RoadsService,private authService:AuthService,private router:Router){}
  ngOnInit(): void {
    this.checkAuthentication();
  }

profile:any;
checkAuthentication(){
  if(
    this.authService.isAuthenticated()
  ){
    this.profile=this.authService.getUserProfile();
    if(this.profile.role=="ADMIN"){
      this.router.navigate(["home"]);
    }else{
      this.router.navigate(["home/tasks/user-tasks/"+this.profile.uuid]);
    }
  
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
        this.authService.setToken(res.access_token);
        this.authService.setRefreshToken(res.refresh_token);
        this.fetchUserProfile(res.access_token);
        this.checkAuthentication();
    }),(error:HttpErrorResponse)=>{
        alert(error.message);
    }
    }

     fetchUserProfile(token:any) {
     var uuid= this.authService.getUserUuIdFromToken(token);
     this.service.findUserByUUID(uuid).subscribe((res:any)=>{
      sessionStorage.setItem('profile', JSON.stringify(res));
     }),(error:HttpErrorResponse)=>{};
    }

}


