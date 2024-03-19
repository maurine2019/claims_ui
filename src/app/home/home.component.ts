import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar-service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state('open', style({
        width: '200px', // Adjust the width as needed
      })),
      state('closed', style({
        width: '64px', // Adjust the width as needed
      })),
      transition('open <=> closed', animate('0.3s ease-in-out')),
    ]),
  ],
})
export class HomeComponent  {

  isSidebarOpen: boolean = true;
  sidebarWidth: string = '200px'; // Initial width

  constructor(private sidebarService: SidebarService,
    private authService:AuthService,
    private router : Router) {}

  ngOnInit(): void {
    // if(!this.authService.isAuthenticated()){
    //     this.router.navigate(["login"]);
    // }
    }
    
isOpen=this.sidebarService.isOpen;
  //   this.sidebarService.sidebarWidth$.subscribe((width) => {
  //     this.sidebarWidth = width;
  //   });
  // }
  

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

}
