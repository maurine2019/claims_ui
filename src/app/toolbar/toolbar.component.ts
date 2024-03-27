import { Component, OnInit } from '@angular/core';
import { AuthService } from '../AuthService';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit{


  private jwtHelper: JwtHelperService = new JwtHelperService();

  getFnameFromToken(token: any) {
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken?.fname || null;
  }

  constructor(private authService:AuthService){}


  fname="Joe";
  profile:any;
  ngOnInit(): void {
this.profile=this.authService.getUserProfile();
    this.fname=this.profile.firstname;
    
  }
 
        logout() {
            this.authService.logout();
        }

}

