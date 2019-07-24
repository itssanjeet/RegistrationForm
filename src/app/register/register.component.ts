import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators, NgForm } from '@angular/forms';

import { UserDataService } from '../user-data.service';
import { Employee } from '../employee.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) FormData: NgForm;

  employeeArray: Employee[];
  subscription: Subscription;

  id: number;
  editMode = false;
  employeeForm: FormGroup;
  get empControls(){
    return (this.employeeForm.get('employeeDetails') as FormArray ).controls
  }

  constructor(
    private userDataService: UserDataService
    ) {
  }

  ngOnInit() {
    this.initForm();
    this.subscription = this.userDataService.employeeChanged
      .subscribe(
        (employee: Employee[]) => {
          this.employeeArray = employee;
        }
      );
      this.employeeArray = this.userDataService.getEmployees();
  }
  onSubmit() {
    console.log(this.employeeForm);
    this.userDataService.add(this.employeeForm.value);
   this.employeeArray= this.userDataService.getEmployees();
  }


  private initForm() {
    let employeeName = '';
    let email = '';
    let mobile = '';
    let empArray = new FormArray([]);

    this.employeeForm = new FormGroup({
      'name': new FormControl(employeeName, Validators.required),
      'email': new FormControl(email, [Validators.required, Validators.email]),
      'mobile': new FormControl(mobile, Validators.required),
      'employeeDetails': empArray
    });
  }

  onAddEmployee(){
      (<FormArray>this.employeeForm.get('employeeDetails')).push(
        new FormGroup({
          'name': new FormControl(null, Validators.required),
          'joinYear': new FormControl(null, Validators.required),
          'leaveYear': new FormControl(null, Validators.required)
        })
      );
  }

  onDeleteEmployee(index: number) {
      (<FormArray>this.employeeForm.get('employeeDetails')).removeAt(index);
    }

    // show(){
    //   this.employeeForm.getRawValue(this.)
    // }
    
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
