import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { EmployeeData } from '../models/employee-data.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://dummy.restapiexample.com/api/v1/';

  getEmployees(): Observable<any> {
    return this.http.get(this.baseUrl + "employees");
  }

  getEmployee(id: number): Observable<any> {
    var url = this.baseUrl + "employee/";
    return this.http.get(url + id);
  }

  createEmployee(employeeData: EmployeeData): Observable<any> {
    var url = this.baseUrl + "create";
    return this.http.post(url, employeeData);
  }

  updateEmployee(employeeData: EmployeeData): Observable<any> {
    var url = this.baseUrl + "update/" + employeeData.id;
    return this.http.put(url, employeeData);
  }
}