import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  findSubCounties() {
    return this.http.get<any>("http://localhost:8081/subcounty");
  }

  findTaskStatus() {
    return this.http.get<any>("http://localhost:8081/task/status");
  }
  createTask(payload:any) {
    return this.http.post<any>("http://localhost:8081/task",payload);
  }
  constructor(private http:HttpClient){}
  findAllActivities():Observable<any> {
    return this.http.get<any>("http://localhost:8081/activity");
  }
  findWardBySubcounty(subcountyId:number):Observable<any>{
    return this.http.get<any>("http://localhost:8081/ward/"+subcountyId);
  }

}
