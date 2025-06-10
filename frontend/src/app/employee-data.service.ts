import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  employeeList:Array<Employee>=[];

  addEmployee(employee:Employee){
    this.employeeList.push(employee)
  }

  constructor() { }
}
