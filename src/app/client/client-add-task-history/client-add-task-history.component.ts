import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-client-add-task-history',
  templateUrl: './client-add-task-history.component.html',
  styleUrls: ['./client-add-task-history.component.scss']
})
export class ClientAddTaskHistoryComponent {
  title: string="Add Task History";
task: any;

constructor(private service: RoadsService,private route:ActivatedRoute) {}
ngOnInit(): void {


this.route.params.subscribe(params => {
const uuid = params['uuid'];
if(uuid!=null){
  this.service.findTaskByUuid(uuid).subscribe((res:any)=>{
this.task=res;
this.findTaskHistoryByTask();
  }),(error:HttpErrorResponse)=>{
    alert(error.message);
  };
} });
}

taskHistories:any;

findTaskHistoryByTask(){
 
  this.service.findAllTaskHistoryByTask(this.task.jobId).subscribe((res:any)=>{
    this.taskHistories=res;
    console.log(this.taskHistories);
  }),(error:HttpErrorResponse)=>{

  }
  
}

}
