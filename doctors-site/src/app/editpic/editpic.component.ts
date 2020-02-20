import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';
import { Patient } from '../models/patients.models';

@Component({
  selector: 'app-editpic',
  templateUrl: './editpic.component.html',
  styleUrls: ['./editpic.component.css']
})
export class EditpicComponent implements OnInit {

  patient:Patient={
    firstname:null,
    lastname:null,
  Gender:null,
    day:null,
    month:null,
    year:null,
    date:null,
    Clinical:null,
    PhotoPath:'select',
    imgPath:null,
    file:null,
   
   
  }
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private _patientService:PatientsService, private _router:Router) { }

 
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          date: ['', Validators.required],
          Gender: ['', Validators.required],
          Clinical: ['', Validators.required],
          file: ['', Validators.required],

         
   
        
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

     //stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
     }
      this._patientService.save(this.patient);
    this._router.navigate(['car']);
    /*console.log(this.patient);*/
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

    


  
  onChange(event) {
    var files = event.srcElement.files;
    console.log(files);
  }



  public imgPath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imgPath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
  
  
}
