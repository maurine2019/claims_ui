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
  
    toggleSidebar(): void {
      this._isSidebarOpen.next(!this._isSidebarOpen.value);
      this._sidebarWidth.next(this._isSidebarOpen.value ? '200px' : '64px'); // Adjust as needed
    }
//   private _isSidebarOpen = new BehaviorSubject<boolean>(true);
//   isSidebarOpen$ = this._isSidebarOpen.asObservable();

//   toggleSidebar(): void {
//     this._isSidebarOpen.next(!this._isSidebarOpen.value);
//   }

}
