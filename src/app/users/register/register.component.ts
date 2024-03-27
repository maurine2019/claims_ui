import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from 'src/app/RoadsService';
import { MyserviceService } from 'src/app/jobs/myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
  @ViewChild('subCountySelect') subCountySelect: any;
  password_matches:boolean =false;

      checkIfPasswordMatches() {
        var pass=  this.registrationForm.get("password")?.value;
        var confirm_pass=  this.registrationForm.get("confirm_password")?.value;
        if(pass==confirm_pass){
          this.password_matches=false;
        }else{
          this.password_matches=true;
        }

      }


title: string="Register User";
vehicles: any;

        updateUser() {
          this.service.updateUser(this.user.uuid,this.registrationForm.value).subscribe((res:any)=>{
            alert(res.message);
          }),(error:HttpErrorResponse)=>{
            alert(error.message);
          }
        }
departments: any;
  user: any='';
  constructor(private myService:MyserviceService, private service: RoadsService,private route:ActivatedRoute) {}
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const uuid = params['user_uuid'];
      if(uuid!=null){
        this.findUserByUUID(uuid);
      } });
    this.findDesignations();
    this.findDepartments();
    this.findVehicles();
    this.findSubCounties();
  }


subcounties:any;
  findSubCounties() {
    this.myService.findSubCounties().subscribe((res: any[]) => {
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

  // 
  populateForm(): void {
    this.title="Update User"
    const transformedObject = {
      fname: this.user.firstname,
      lname: this.user.lastname,
      email: this.user.email,
      phone: this.user.phone, 
      idNumber: this.user.idNumber,
      staffNo: this.user.staffNo,
      designationId: this.user.designation ? this.user.designation.id : null,
      departmentId: this.user.department ? this.user.department.depId : null
    };

    this.registrationForm.patchValue(transformedObject);
  }

  findVehicles(){
    this.service.findVehicles().subscribe((res:any)=>{
      this.vehicles =res;
    }),(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  }
      findUserByUUID(uuid:any){
        this.service.findUserByUUID(uuid).subscribe((res:any)=>{
          this.user =res;
          this.populateForm();
          console.log(this.user);
        }),(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }


  registerUser() {
    this.service.registerUser(this.registrationForm.value).subscribe((res:any)=>{
      alert(res.message);
    }),(error:HttpErrorResponse)=>{
      alert(error.message);
    }
  }


  registrationForm = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    idNumber:new FormControl(),
    staffNo:new FormControl(),
    password:new FormControl(),
    designationId: new FormControl(),
    departmentId:new FormControl(),
    vehicleId:new FormControl(),
    wardId:new FormControl()
  });

  designations: any;
  findDesignations() {
    this.service.findDesignations().subscribe((res: any) => {
      this.designations = res;
    });
  }


      findDepartments(){
        this.service.findDepartments().subscribe((res:any)=>{
          this.departments=res;
        }),(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      }


}
