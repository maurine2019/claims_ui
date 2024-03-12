import { Component, HostBinding } from '@angular/core';
import { SidebarService } from './sidebar-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

constructor(private sidebarService:SidebarService){}
// private _isSidebarOpen = new BehaviorSubject<boolean>(true);
isSidebarOpen$ = this.sidebarService.isSidebarOpen$;

// toggleSidebar(): void {
//   this._isSidebarOpen.next(!this._isSidebarOpen.value);
// }

isOpen:boolean=true;
  toggleSidebar(): void {
    if(this.isOpen){
      this.isOpen=false;
    }else{
    this.isOpen=true;
    }
  }

}
