import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(): void {
    if(
      this.authService.isAuthenticated()
    ){
    this.router.navigate(["home"]);
    }
  }


}
