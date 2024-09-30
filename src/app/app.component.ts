import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gs-lab-test-app';
  data : employee[] = [];
  constructor(private employeeService : EmployeeService){
    employeeService.getEmployeeData().subscribe(data => {
      this.data = data;
    });
  }
}
