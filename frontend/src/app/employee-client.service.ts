import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeClientService {

  constructor(private _http: HttpClient) { }

  baseUrl = "http://localhost:8080/api/employees";

  getAllEmployees(): Observable<Array<Employee>> {
    return this._http.get<Array<any>>(this.baseUrl).pipe(
      map(employees => employees.map(emp => Employee.fromJson(emp)))
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this._http.get<any>(`${this.baseUrl}/${id}`).pipe(
      map(emp => Employee.fromJson(emp))
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._http.post<any>(this.baseUrl, employee).pipe(
      map(emp => Employee.fromJson(emp))
    );
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this._http.put<any>(`${this.baseUrl}/${id}`, employee).pipe(
      map(emp => Employee.fromJson(emp))
    );
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
}
