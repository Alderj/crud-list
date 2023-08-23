import { Component } from '@angular/core';
import { Employee } from './models/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id:1, name:"Alder", country:"Brazil"},
    {id:2, name:"Madonna", country:"USA"},
    {id:3, name:"Puttin", country:"Russia"}
  ]

  
}
