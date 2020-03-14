import { Component, OnInit } from '@angular/core';
import { FormControl, Validators , FormGroup, FormBuilder} from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonalService } from '../personal.service';
import { User } from '../model/personal';
import { Router } from '@angular/router';



@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
 use:User={
  firstname:null, 
   lastname:null,
   gender:null,
   age:null,
   dob:null,
   Blood:null,
   marital:null,
   phonenumber:null,
   email:null,
   enumber:null,
   paddress:null,
   presentaddress:null,
   pan:null,
   uan:null,
   aadhaar:null,
   licence:null,
   
   }

   submitted = false;
  useForm: FormGroup;

   constructor(private formBuilder: FormBuilder,private _router:Router,private PersonalService :PersonalService ) { }
 
   ngOnInit() {
 
     this.useForm = this.formBuilder.group({
      firstname: ['', Validators.required],
     lastname:['',Validators.required],
     gender:['',Validators.required],
     age: ['', Validators.required],
     dob:['',Validators.required],
     Blood:['',Validators.required],
     marital:['',Validators.required],
     phonenumber: ['', Validators.required],
     email:['',Validators.required],
     enumber:['',Validators.required],
     paddress: ['', Validators.required],
     presentaddress:['',Validators.required],
     pan:['',Validators.required],
     uan: ['', Validators.required],
     aadhaar:['',Validators.required],
     licence:['',Validators.required]




     
   });
   }
 
   get f() { return this.useForm.controls; }
 
   onSubmit() {
       this.submitted = true;
 
      //stop here if form is invalid
     if (this.useForm.invalid) {
         return;
      }
       this.PersonalService.save(this.use);
  
      this._router.navigate(['11']);
      alert("Successfully ");
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
              
              


    

