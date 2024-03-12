import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoadsService } from 'src/app/RoadsService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit{
title: string="Register User";

        updateUser() {
          alert("clicked");
          
          this.service.updateUser(this.user.uuid,this.registrationForm.value).subscribe((res:any)=>{
            alert(res.message);
          }),(error:HttpErrorResponse)=>{
            alert(error.message);
          }
        }
departments: any;
  user: any='';
  constructor(private service: RoadsService,private route:ActivatedRoute) {}
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const uuid = params['user_uuid'];
      if(uuid!=null){
        this.findUserByUUID(uuid);

      }
      
    });

    this.findDesignations();
    this.findDepartments();


  }


  populateForm(): void {
    this.title="Update User"
    const transformedObject = {
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone, 
      idNumber: this.user.idNumber,
      staffNo: this.user.staffNo,
      designationId: this.user.designation ? this.user.designation.id : null,
      departmentId: this.user.department ? this.user.department.depId : null
    };

    this.registrationForm.patchValue(transformedObject);
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
    name: new FormControl(),
    email: new FormControl(),
    phone: new FormControl(),
    idNumber:new FormControl(),
    staffNo:new FormControl(),
    designationId: new FormControl(),
    departmentId:new FormControl()
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
