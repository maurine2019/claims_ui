import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.scss']
})
export class ClientTasksComponent {
  constructor(private service:RoadsService){}
  userId=this.getUserUuid();

  getUserUuid(): string | null {
    return sessionStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.userId=this.getUserUuid();

    this.findTasksByUser();
  }

  tasks:any;
    findTasksByUser(){
        this.service.findTaskByUser(this.userId).subscribe((res:any)=>{
          this.tasks=res;
          console.log(this.tasks);
        }),(error:HttpErrorResponse)=>{}
    }
}
