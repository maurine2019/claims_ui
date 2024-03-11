import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoadsService {
  updateUser(uuid: any, value: any) {
    return this.http.put<any>("http://localhost:8081/staff/update/"+uuid,value);
  }

  findUserByUUID(uuid: any) {
    return this.http.get<any>("http://localhost:8081/staff/"+uuid);
  }

  assignTask(jsonObject:any) {
    return this.http.post<any>("http://localhost:8081/task/assign",jsonObject);
  }
  findDepartments() {
    return this.http.get<any>("http://localhost:8081/department");
  }

  registerUser(user:any) {
    return this.http.post<any>("http://localhost:8081/staff",user);
  }


  findUsers():Observable<any> {
    return this.http.get<any>("http://localhost:8081/staff");
  }

  findDesignations():Observable<any> {
    return this.http.get<any>("http://localhost:8081/staff/designation");
  }
  findAllTasks():Observable<any> {
    return this.http.get<any>("http://localhost:8081/task");
  }
  createTask(payload:any) {
    return this.http.post<any>("http://localhost:8081/activities/add",payload);
  }
  constructor(private http:HttpClient){}
  findAllActivities():Observable<any> {
    return this.http.get<any>("http://localhost:8081/activities/all");
  }
  findWardBySubcounty(subcountyId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8081/wards/"+subcountyId);
  }


}
