import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeClientService } from '../employee-client.service';

import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(public _employeeClient:EmployeeClientService) { }

  employeeList:Array<Employee>=[];

  fetchData(){
    this._employeeClient.getAllEmployees().subscribe(
      data => {
        
        this.employeeList=data;
      }

  )
  }

  ngOnInit(): void {
    this.fetchData();

   

  }


  deleteEmployee(employeeId:number){
    
    if(confirm("Sure to delete?")){

    this._employeeClient.deleteEmployee(employeeId).subscribe(
      data=> {
        alert("Deleted Successfully!!")
        this.fetchData()
      }
    )

  }
}

}
