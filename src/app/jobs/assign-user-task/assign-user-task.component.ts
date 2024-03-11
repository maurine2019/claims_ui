import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-assign-user-task',
  templateUrl: './assign-user-task.component.html',
  styleUrls: ['./assign-user-task.component.scss']
})
export class AssignUserTaskComponent {



  
constructor(private service:RoadsService,private route:ActivatedRoute){}
taskId='';
    searchForm= new FormGroup({
      search:new FormControl()
    })
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.taskId = params['uuid'];
      });

      this.findUsers();
    }

    users:any;
    findUsers(){
      this.service.findUsers().subscribe((res:any)=>{
        this.users=res;
      }),(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    }

      assignTask(uId: any) {
        const userId=uId;
        const taskUuid=this.taskId;

        const jsonObject = {
          "userId": userId,
          "taskUuid": taskUuid
        };

        this.service.assignTask(jsonObject).subscribe((res:any)=>{
alert(res.message);
        }),(error:HttpErrorResponse)=>{
          alert(error.message);
        }

      }
}
