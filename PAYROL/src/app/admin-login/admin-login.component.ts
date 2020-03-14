import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
 
    submitted = false;
AdminloginForm = this.fb.group({
    
    username: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    password: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)]
  });
  
  constructor(private fb: FormBuilder) {}
  
  onSubmit() {
  
  }
  ngOnInit() {
    
    
  }
}
