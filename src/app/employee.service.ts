import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private client : HttpClient) { }

  getEmployeeData() : Observable<employee[]>{
    let url = "http://localhost:9000/employee";
    return this.client.get<employee[]>(url);
  }
}
