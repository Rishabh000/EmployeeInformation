import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeClientService } from '../employee-client.service';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  constructor(private _employeeClient:EmployeeClientService, private _router:Router) { }

  ngOnInit(): void {
  }

  addEmployee(employee:Employee){
    this._employeeClient.addEmployee(employee).subscribe(
      data => this._router.navigate(['/view-employee'])
    )
  }

}
