import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.scss']
})
export class UserTasksComponent implements OnInit {
userId :number = 104;
user:any='';
searchForm = new FormGroup({
  search:new FormControl()
})

constructor(private service:RoadsService,private route:ActivatedRoute){}
  ngOnInit(): void {
   

    this.route.params.subscribe(params => {
      const uuid = params['user_uuid'];
      // if(uuid!=null){
        this.service.findUserByUUID(uuid).subscribe((res:any)=>{
              this.user=res;
              this.userId=this.user.id;
              console.log(this.user);
              this.findTasksByUser();

        }),(error:HttpErrorResponse)=>{
          alert(error.message);
        // };


      } });
  }
  tasks:any;
    findTasksByUser(){
        this.service.findTaskByUser(this.userId).subscribe((res:any)=>{
          this.tasks=res;
          console.log(this.tasks);
        }),(error:HttpErrorResponse)=>{}
    }


}
