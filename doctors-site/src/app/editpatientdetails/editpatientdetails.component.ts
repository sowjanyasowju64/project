import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patients.models';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editpatientdetails',
  templateUrl: './editpatientdetails.component.html',
  styleUrls: ['./editpatientdetails.component.css']
})
export class EditpatientdetailsComponent implements OnInit {
  patient:Patient={
    firstname:null,
    lastname:null,
  Gender:'select',
    day:null,
    month:null,
    year:null,
    date:null,
    Clinical:null,
    PhotoPath:'select',
    imgPath:null,
    file:null,
   
   
  }

 
    

  constructor( private _patientService:PatientsService, private _router:Router, private route:ActivatedRoute) { }

 
/*getPatients(firstname:any){

  
}*/
  

  savePatient():void{
   
    this._patientService.save(this.patient);
    this._router.navigate(['car']);
    console.log(this.patient);

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




  ngOnInit() {
   
}

// convenience getter for easy access to form fields


}
