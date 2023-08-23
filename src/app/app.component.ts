import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: "Alder", country: "Brazil" },
    { id: 2, name: "Madonna", country: "USA" },
    { id: 3, name: "Puttin", country: "Russia" }
  ]

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }
}
