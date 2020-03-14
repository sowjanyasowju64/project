import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-forgotpassword',
  templateUrl: './admin-forgotpassword.component.html',
  styleUrls: ['./admin-forgotpassword.component.scss']
})
export class AdminForgotpasswordComponent implements OnInit {
  AdminforgotForm = this.fa.group({
    oldpassword: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    newpassword: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)],
    confirmpassword: [null,Validators.required,Validators.minLength(6),Validators.maxLength(8)]

  });
  
  constructor(private fa: FormBuilder) {}


  ngOnInit() {
  }

}
