import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-tasks-default',
  templateUrl: './tasks-default.component.html',
  styleUrls: ['./tasks-default.component.scss']
})
export class TasksDefaultComponent implements OnInit {
  task1:any=[];
setTask(task: any) {
  this.task1=task;
}
  task_uuid ='dfghjklsdfdghgfesdxlckjhghjkl'
constructor(private roadsService:RoadsService){}
  ngOnInit(): void {
    this.findSubcounties();
    this.findAllTasks();
    this.findTaskNature();

  }
  taskNatures:any;
findTaskNature(){
this.roadsService.findTaskNature().subscribe((res:any)=>{
this.taskNatures=res;
}),(error:HttpErrorResponse)=>{

}
}
  searchForm=new FormGroup({
    search: new FormControl()
      });


  tasks: any;
  findAllTasks() {
    this.roadsService.findAllTasks().subscribe((res: any) => {
      this.tasks = res;
      console.log(this.tasks);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      };
  }
subcounties:any;
  findSubcounties(){
    this.roadsService.findSubcounties().subscribe((res:any)=>{
this.subcounties=res;
    }),(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  }
}
