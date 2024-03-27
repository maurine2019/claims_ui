import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './AuthService';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    // private jwtHelper: JwtHelperService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = this.authService.getToken();

    // Check if the user is logged in by validating the token
    if (token && !this.authService.isTokenExpired(token)) {
      // If the token is valid, check if the user has the required roles to access the route
      const requiredRoles = route.data['roles'] as string[];

      if (requiredRoles && requiredRoles.length > 0) {


        const userRolesString: string[] = this.authService.getUserRoles(); // Assuming this returns a single string
        console.log(userRolesString); // Logging the userRolesString
        console.log(requiredRoles);
        
        // Assuming requiredRoles is an array of roles you want to check against
        const intersection = requiredRoles.filter(role => userRolesString.includes(role));

        const roleMatches=userRolesString.findIndex(role=>requiredRoles.indexOf(role) !==-1)
                  return (roleMatches<0)? false : true;
    // // return requiredRoles.every((role) => this.roles.includes(role));
    //         }

        // if (intersection.length === 0) {
        //   // If the user doesn't have any of the required roles, navigate to unauthorized page or login page
        //   this.router.navigate(['/unauthorized']);
        //   return false;
        // }
      }
      
      // User is authenticated and has required roles, so allow access to the route
      return true;
    } else {
      // If the user is not logged in or token is expired, redirect to the login page
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
