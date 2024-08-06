import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  employee : Employee ;
  result : string;
  employeeArr : Employee[];
  flag : boolean;
  


  constructor(private Service : EmployeeService ){
    this.employee = new Employee();
    this.result = "";
    this.employeeArr = [];
    this.flag = false;  
  }
 
  insertEmployee (data: any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;

    this.result = this.Service.insertEmployee(this.employee);
  }

  updateEmployee (data: any){
    this.employee.id = data.empId;
    this.employee.empName = data.empName;
    this.employee.empSalary = data.empSalary;

    this.result = this.Service.updateEmployee(this.employee);
  }

  deleteEmployee (data: any){

    this.result = this.Service.deleteEmployee(data.empId);
  }

  findEmployee (data: any){
    this.employee = this.Service.findEmployee(data.empId);
    this.result = this.employee.id+ "" + this.employee.empName + "" +this.employee.empSalary;
  }

  findAllEmployee(){
   this.employeeArr = this.Service.findAllEmployee();
   this.flag= true;
  }


}
