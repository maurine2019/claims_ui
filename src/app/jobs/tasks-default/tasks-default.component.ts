import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-tasks-default',
  templateUrl: './tasks-default.component.html',
  styleUrls: ['./tasks-default.component.scss']
})
export class TasksDefaultComponent implements OnInit,OnDestroy {
  task1:any=[];
  profile:any;




setTask(task: any) {
  this.task1=task;
}
  task_uuid ='dfghjklsdfdghgfesdxlckjhghjkl'
constructor(private roadsService:RoadsService){}
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {

  
const u=sessionStorage.getItem("profile");
if(u){
  this.profile=JSON.parse(u);
}
   
this.findTaskNature();
this.findSubcounties();

   
   if(this.profile.role=="ADMIN"){
    this.findAllTasks();
  }else{
    this.findUserTasks(this.profile.id);
  }

  }
 findUserTasks(userId:any){
this.roadsService.findTaskByUser(userId).subscribe((res:any)=>{
  this.tasks=res;
})
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
