import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthService } from 'src/app/AuthService';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {
  
editHistory(history: any) {
  // alert(history.fuel);

this.historyForm.patchValue({
    distance: 0,//history.distance,
    fuel: history.fuel,
    taskStatusId: history.taskStatus.id,
    taskId:this.task.jobid,
    createdById: history.userDTO.id,
    description:history.description,
    historyStatusId:history.historyStatus.id,
    historyTypeId:history.historyType?.id,
})
}
deleteHistory(historyId: any) {
this.service.deleteHistory(historyId).subscribe((res:any)=>{
alert(res.message);
this.fetchTaskByUuid();
}),(error:HttpErrorResponse)=>{}
}

  historyForm=new FormGroup({
  distance:new FormControl(),
  fuel:new FormControl(),
  taskStatusId:new FormControl(),
  taskId:new FormControl(),
  createdById:new FormControl(),
  description:new FormControl(),
  historyStatusId:new FormControl(),
  historyTypeId:new FormControl(),
})
showAdditionalFields: any;
remainingDistance:any=1;

constructor(private route:ActivatedRoute,
  private service:RoadsService,
  private authService:AuthService){}
task :any;
uuid:string='';
  ngOnInit(): void {

    this.route.params.subscribe(params => {
       this.uuid = params['uuid'];
       this.fetchTaskByUuid();
    });

    this.fetchTaskHistoryType();
    this.fetchTaskHistoryStatus();
    this.fetchTaskStatus();
  }

  distance:any;
fetchTaskDistance(){
this.service.fetchTaskDistance(this.task.jobId).subscribe((res:any)=>{
this.distance=res;
console.log(">>>>>>>>>>>>>>>>>"+this.distance);
this.remainingDistance=this.distance?.totalDistance-this.distance?.distanceCovered;
}),(error:HttpErrorResponse)=>{

}
}

  operators:any;
fetchAssignedOperators(taskId:any){
  this.service.fetchAssignedOperators(taskId).subscribe((res:any)=>{
    this.operators=res;
  }),(error:HttpErrorResponse)=>{

  }
}
  onHistoryTypeChange(): void {
    const selectedHistoryTypeId = this.historyForm.get('historyTypeId')?.value;

    if (selectedHistoryTypeId == 2||selectedHistoryTypeId == 1) {
      this.showAdditionalFields = true;
      this.historyForm.patchValue({
        distance: 0, // Replace with the actual taskId
        taskStatusId:4

      });
    } else {
      this.showAdditionalFields = false;
      this.historyForm.patchValue({
        fuel: 0, // Replace with the actual taskId

      });
    }
  }


  

  saveHistory() {
    // hist={ distance: any; fuel: any; taskStatusId: any; taskId: any; createdById: any; description: any; historyStatusId: any; historyTypeId: any; };
    
    this.historyForm.patchValue({
      taskId: this.task.jobId, // Replace with the actual taskId
      createdById: this.authService.getUserId(), // Replace with the actual userId
      historyStatusId:3,
      
    });
    var remainingDistance=this.distance?.distance-this.distance?.totalDistance;

if(this.historyForm.get("distance")?.value>0 && remainingDistance<=0){
alert("Cannot Create History with Additional Distance \n Total Distance is Covered!");
}else{
  this.service.saveHistory(this.historyForm.value).subscribe((res:any)=>{
    alert(res.message);
  }),(error:HttpErrorResponse)=>{
}
}

    }

  fetchTaskByUuid(){
    if(this.uuid!=null){
      this.service.findTaskByUuid(this.uuid).subscribe((res:any)=>{
            this.task=res;
            this.task.taskHistories.sort((a: { dateCreated: string | number | Date; }, b: { dateCreated: string | number | Date; }) => new Date(a.dateCreated).getTime() - new Date(b.dateCreated).getTime());
            this.fetchAssignedOperators(this.task.jobId)
            this.fetchTaskDistance();
      }),(error:HttpErrorResponse)=>{
        alert(error.message);
      }; } 
  }

historyStatuses:any;
  fetchTaskHistoryStatus(){
    this.service.fetchTaskHistoryStatus().subscribe((res:any)=>{
      this.historyStatuses=res;
    }),(error:HttpErrorResponse)=>{}
  }

  historyTypes:any;
  fetchTaskHistoryType(){
    this.service.fetchTaskHistoryType().subscribe((res:any)=>{
      this.historyTypes=res;
    }),(error:HttpErrorResponse)=>{}
  }
  taskStatus:any;
  fetchTaskStatus(){
    this.service.fetchTaskStatus().subscribe((res:any)=>{
      this.taskStatus=res;
    }),(error:HttpErrorResponse)=>{}
  }

}
