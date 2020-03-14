import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/show-employee';

import { ShowEmployeeService } from '../services/show-employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employee:Employee={
    firstname:null,
    fmail:null,
    pmail:null,
    phonenumber:null,
     status:null,
   level: null,
    pay:null,
    designation:null,
    ctc:null,
    agreement:null,
    nperiod:null,
    wtype:null,
    wp:null,
    date:null,
    job:null,
    relieving:null,
    department:null,

   }
   EmployeeForm: FormGroup;
   submitted = false;
   constructor(private formBuilder: FormBuilder,private _router:Router,private showemployee:ShowEmployeeService) { }
 
   ngOnInit() {
 
     this.EmployeeForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      status:['',Validators.required],
      fmail: ['', Validators.required],
      pmail: ['', Validators.required],
      phonenumber: ['', Validators.required],
      level:['',Validators.required],
      pay: ['', Validators.required],
      designation: ['', Validators.required],
      ctc: ['', Validators.required],
      agreement: ['', Validators.required],
      nperiod:['',Validators.required],
      wtype:['',Validators.required],
      wp: ['', Validators.required],
      date:['',Validators.required],
      job: ['', Validators.required],
      department:['',Validators.required]

     
   });
   }
 
   get f() { return this.EmployeeForm.controls; }
 
   onSubmit() {
       this.submitted = true;
 
      //stop here if form is invalid
     if (this.EmployeeForm.invalid) {
         return;
      }
       this. showemployee.save(this.employee);
  
      this._router.navigate(['showemployee']);
      alert("Successfully generated employee id");
   }
   
 
}
