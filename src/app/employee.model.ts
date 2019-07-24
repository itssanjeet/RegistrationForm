import { EmployeeDetails } from './employee-details.model';

export class Employee {
  public name: string;
  public email: string;
  public mobile: string;
  public employeeDetails: EmployeeDetails[];

  constructor(name: string, email: string, mobile: string, employeeDetails: EmployeeDetails[]) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.employeeDetails = employeeDetails;
  }
}
