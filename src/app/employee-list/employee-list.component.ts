import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  constructor(
    private emmployeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emmployeeService.getEmployeesList().subscribe((data) => {
      this.employees = data;
      // console.log(data);
    });
  }

  viewEmployee(id: number) {
    this.router.navigate(['/view-employee/' + id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['/update-employee/' + id]);
  }

  deleteEmployee(id: number) {
    this.router.navigate(['/delete-employee/' + id]);
  }
}
