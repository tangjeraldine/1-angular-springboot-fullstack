import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: any;
  id!: number;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params[`id`];
    this.employeeService
      .getEmployeeById(this.id)
      .subscribe((data) => (this.employee = data));
  }

  onSubmit(input: NgForm) {
    this.employeeService
      .updateEmployee(this.id, input.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/employees']);
      });
  }
}
