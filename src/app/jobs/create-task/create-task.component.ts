import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})

export class CreateTaskComponent {
  @ViewChild('subCountySelect') subCountySelect: any;
  
  activityForm = this.formBuilder.group({
    activityId: ['', Validators.required],
    roadName: ['', Validators.required],
    description: ['', Validators.required],
    fuel: ['', Validators.required],
    distance: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    wardId: ['', Validators.required],
    taskNatureId:['',Validators.required]

  });
subcounties: any;
taskNatures: any;
findTaskNatures(){
  this.roadsService.findTaskNature().subscribe((res:any)=>{
    this.taskNatures=res;
  }),(error:HttpErrorResponse)=>{

  }
}

  constructor(
    private service: MyserviceService,
    private formBuilder: FormBuilder,
    private roadsService: RoadsService
  ) {}

  ngOnInit(): void {
    this.findSubCounties();
    this.findTaskStatus();
    this.findAllActivities();
    this.findTaskNatures();
  }
  activities: any[] = [];

  findAllActivities() {
    this.service.findAllActivities().subscribe((res: any[]) => {
      this.activities = res;
      console.log(this.activities);
    }),
      (error: HttpErrorResponse) => {};
  }

  findSubCounties() {
    this.service.findSubCounties().subscribe((res: any[]) => {
      this.subcounties = res;
    }),
      (error: HttpErrorResponse) => {};
  }

  wards: any[] = [];
  findAllwards() {
    const subcounty = this.subCountySelect.nativeElement.value;
    this.service.findWardBySubcounty(subcounty).subscribe((res: any[]) => {
      this.wards = res;
      console.log(this.wards);
    }),
      (error: HttpErrorResponse) => {};
  }

  taskStatus: any[] = [];
  findTaskStatus() {
    this.service.findTaskStatus().subscribe((res: any[]) => {
      this.taskStatus = res;
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      };
  }

  public onallocatejob() {
    //  if(this.activityForm.valid)
    this.service.createTask(this.activityForm.value).subscribe((res: any) => {
      alert(res.message);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log(error.headers);
      };
  }


}
