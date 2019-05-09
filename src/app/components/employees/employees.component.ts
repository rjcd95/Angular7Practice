import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.scss']
})

export class EmployeesComponent implements OnInit {
    employees: Employee[];
    displayedColumns: string[] = [
        "employee_name",
        "employee_salary",
        "employee_age"
    ];

    ngOnInit() {
        this.apiService.getEmployees()
            .subscribe(data => {
                this.employees = data;
                this.displayedColumns = ['employee_name', 'employee_salary', 'employee_age', 'action'];
            });
    }

    constructor(private apiService: ApiService) { }

}