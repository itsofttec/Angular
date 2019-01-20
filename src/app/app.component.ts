import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { employee } from './business/employee/employee';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OBJECTWARE';

  headElements = ['ID', 'Trigramme', 'Prénom', 'Nom', 'Job'];

  employees: employee[];

  constructor(private employeeService: AppService) { }

  ngOnInit() {
      this.getEmployees();
  }

  getEmployees() {
      this.employeeService.getEmployees().subscribe(
              response => {
                  this.employees = <employee[]>response;
              }, error => { alert(`Can't get employees.`); }
        );
  }
}
