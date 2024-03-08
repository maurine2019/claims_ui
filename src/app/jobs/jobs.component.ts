import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {


        activityForm=this.formBuilder.group({
          activityID:["",Validators.required],
          vehicleID:["",Validators.required],
          staffId:["",Validators.required],
          roadName:["",Validators.required],
          jobDescription:["",Validators.required],
          fuel:["",Validators.required],
          distance:["",Validators.required],
          startDate:["",Validators.required],
          endDate:["",Validators.required],
          departmentId:["",Validators.required],
          subCountyId:["",Validators.required],
          wardId:["",Validators.required]
        });



  constructor(private service:MyserviceService,private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.findAllActivities();
  }
  activities:any[]=[];
  findAllActivities() {
   this.service.findAllActivities().subscribe((res:any[])=>{
      this.activities=res;
      console.log(this.activities);
   }),(error:HttpErrorResponse)=>{}
  }
  wards:any[]=[];
  findAllwards(subcountyId:number) {
   this.service.findWardBySubcounty(subcountyId).subscribe((res:any[])=>{
      this.wards=res;
      console.log(this.wards);
   }),(error:HttpErrorResponse)=>{}
  }

public onallocatejob(){
//  if(this.activityForm.valid)
  this.service.createTask(this.activityForm.value).subscribe((res:any)=>{
    alert(res);
    console.log(res);
  }),(error:HttpErrorResponse)=>{
    alert(error.message);
    console.log(error.headers);
  }
}
}
