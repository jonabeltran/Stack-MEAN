import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService: EmployeeService) {

   }

  ngOnInit(): void {
  }

  addEmployee(form: NgForm){
    this.employeeService.postEmployees(form.value)
    .subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'saved'});
    });
  }

  resetForm(form?: NgForm){

    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee("","","","",0);
    }
  }
}
