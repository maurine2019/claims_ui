import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-users-default',
  templateUrl: './users-default.component.html',
  styleUrls: ['./users-default.component.scss']
})
export class UsersDefaultComponent implements OnInit{

constructor(private service:RoadsService){}

      ngOnInit(): void {
        this.findUsers();
      }

      users:any;
      findUsers(){
        this.service.findUsers().subscribe((res:any)=>{
          this.users=res;
          console.log(this.users);
        }),(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }

}
