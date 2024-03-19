import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class RoadsService {
  
  findSubcounties() {
    return this.http.get<any>("http://localhost:8081/subcounty");
  }

  findAllTaskHistoryByTask(id: any) {
    return this.http.get<any>("http://localhost:8081/task/history/"+id);
  }
  
  findTaskByUuid(uuid: any) {
    return this.http.get<any>("http://localhost:8081/task/uuid/"+uuid);
  }
  constructor(private http:HttpClient,private authService:AuthService){}

  findTaskByUser(userId: any) {
    return this.http.get<any>("http://localhost:8081/task/staff/"+userId);
  }

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
  findAllActivities():Observable<any> {
    return this.http.get<any>("http://localhost:8081/activities/all");
  }
  findWardBySubcounty(subcountyId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8081/wards/"+subcountyId);
  }


}
