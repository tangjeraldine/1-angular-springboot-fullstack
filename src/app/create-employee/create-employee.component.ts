import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

  onSubmit(data: NgForm) {
    // console.log(data.value);
    this.employeeService.createEmployee(data.value).subscribe((result) => {
      console.log(result);
      this.goToEmployeeList();
    });
    (error: any) => console.log(error);
  }
}
