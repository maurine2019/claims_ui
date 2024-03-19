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
  ngOnInit(): void {
    this.fname=this.getFnameFromToken(this.authService.getToken())
  }
 
        logout() {
            this.authService.logout();
        }

}

