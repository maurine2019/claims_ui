// sidebar.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
    private _isSidebarOpen = new BehaviorSubject<boolean>(true);
  private _sidebarWidth = new BehaviorSubject<string>('200px'); // Initial width

  isSidebarOpen$ = this._isSidebarOpen.asObservable();
  sidebarWidth$ = this._sidebarWidth.asObservable();


    isOpen:boolean =true;
    
  toggleSidebar(): void {
        this.isOpen = !this.isOpen;
  }


}
