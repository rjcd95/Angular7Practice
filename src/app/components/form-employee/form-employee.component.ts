import { OnInit, Component } from '@angular/core';
import { ApiService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeData } from 'src/app/models/employee-data.model';
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router"

@Component({
    selector: 'app-employee',
    templateUrl: './form-employee.component.html',
    styleUrls: ['./form-employee.component.scss']
})

export class FormEmployeeComponent implements OnInit {
    isLoading = false;
    employee: any = {};
    id = null;
    snackBarMsg = null;

    ngOnInit() {
        if (this.id != 'new') {
            this.isLoading = true;
            this.apiService.getEmployee(this.id)
                .subscribe(data => {
                    this.employee = data;
                    this.isLoading = false;
                });
        }
    }

    constructor(private apiService: ApiService, private route: ActivatedRoute,
        private snackBar: MatSnackBar, private router: Router) {
        this.id = this.route.snapshot.params["id"];
        this.snackBarMsg = snackBar;
    }

    saveData() {
        this.isLoading = true;
        var employeeData: EmployeeData = {
            id: this.employee.id,
            name: this.employee.employee_name,
            salary: this.employee.employee_salary,
            age: this.employee.employee_age
        };
        if (this.id != 'new') {
            this.apiService.updateEmployee(employeeData)
                .subscribe(() => {
                    this.isLoading = false;
                    this.redirectToEmployess('Empleado editado exitosamente!');
                }, error => {
                    console.log("error", error);
                    this.isLoading = false;
                });
        } else {
            this.apiService.createEmployee(employeeData)
                .subscribe(() => {
                    this.isLoading = false;
                    this.employee = {};
                    this.redirectToEmployess('Empleado agregado exitosamente!');
                }, error => {
                    console.log("error", error);
                    this.isLoading = false;
                });;
        }
    }

    redirectToEmployess(message) {
        this.snackBar.open(message, "Ok", {
            duration: 2000,
        });
        setTimeout(() => {
            this.router.navigate(['/employees'])
        }, 2200)
    }
}