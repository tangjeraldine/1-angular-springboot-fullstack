import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseURL = 'http://localhost:8081/api/v1/employees';
  constructor(private httpClient: HttpClient) {}

  getEmployeesList() {
    return this.httpClient.get(this.baseURL);
  }

  createEmployee(employee: Employee) {
    return this.httpClient.post(this.baseURL, employee);
  }

  getEmployeeById(id: number) {
    return this.httpClient.get(this.baseURL + '/' + id);
  }

  updateEmployee(id: number, employee: Employee) {
    return this.httpClient.put(this.baseURL + '/' + id, employee);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
