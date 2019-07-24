import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Input() index: number;

  ngOnInit() {
  }
  constructor(
    private userDataService: UserDataService
  ){}

  onDeleteEmployee() {
    console.log(this.index);
    this.userDataService.deleteEmployee(this.index);
    this.userDataService.getEmployees();
    this.userDataService.saveEmployee();
  }
}
