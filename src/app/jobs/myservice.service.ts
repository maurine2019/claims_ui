import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
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
