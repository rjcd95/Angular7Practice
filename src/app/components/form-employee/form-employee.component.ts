import { OnInit, Component } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeData } from 'src/app/models/employee-data.model';

@Component({
    selector: 'app-employee',
    templateUrl: './form-employee.component.html',
    styleUrls: ['./form-employee.component.scss']
})

export class FormEmployeeComponent implements OnInit {
    employee: any = {};
    id = null;

    ngOnInit() {
        if (this.id != 'new') {
            this.apiService.getEmployee(this.id)
                .subscribe(data => {
                    this.employee = data;
                });
        }
    }

    constructor(private apiService: ApiService, private route: ActivatedRoute) {
        this.id = this.route.snapshot.params["id"];
    }

    saveData() {
        var employeeData: EmployeeData = {
            id: this.employee.id,
            name: this.employee.employee_name,
            salary: this.employee.employee_salary,
            age: this.employee.employee_age
        };
        if (this.id != 'new') {
            this.apiService.updateEmployee(employeeData)
                .subscribe(() => {
                    alert("Empleado editado exitosamente!");
                }, error => {
                    console.log("error", error);
                });
        } else {
            this.apiService.createEmployee(employeeData)
                .subscribe(() => {
                    alert("Nuevo empleado agregado exitosamente!");
                    this.employee = {};
                }, error => {
                    console.log("error", error);
                });;
        }
    }
}