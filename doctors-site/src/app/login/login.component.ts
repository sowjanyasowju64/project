import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false; phoneNumber = "^(\+\d{1,3}[- ]?)?\d{10}$";

  constructor(private formBuilder: FormBuilder, private _patientService:PatientsService, private _router:Router) { }

 

 
  ngOnInit() {
   
      this.loginForm = this.formBuilder.group({
          username: ['',  [Validators.required, Validators.minLength(4)]],
        
          password: ['', [Validators.required, Validators.minLength(6)]],
          checkbox: ['',Validators.required],
         
   
        
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this._router.navigate(["navbar"]);
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
  }

}
