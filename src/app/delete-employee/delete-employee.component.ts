import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
})
export class DeleteEmployeeComponent implements OnInit {
  employee: any;
  id!: number;
  showbox: boolean = false;
  countdown: number = 4;
  isDisabled = false;

  constructor(
    private service: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params[`id`];
    this.service
      .getEmployeeById(this.id)
      .subscribe((data) => (this.employee = data));
  }

  onClose() {
    this.router.navigate(['/employees']);
  }

  onDelete() {
    this.service.deleteEmployee(this.id).subscribe((data) => {
      this.showbox = true;
      this.isDisabled = true;
      setInterval(() => {
        this.countdown -= 1;
      }, 1000);
      setTimeout(() => {
        this.router.navigate(['/employees']);
      }, 4000);
    });
  }
}
