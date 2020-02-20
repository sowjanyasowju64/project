import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { Patient } from '../models/patients.models';


@Component({
  selector: 'app-edit-clinical-conditions',
  templateUrl: './edit-clinical-conditions.component.html',
  styleUrls: ['./edit-clinical-conditions.component.css']
})
export class EditClinicalConditionsComponent implements OnInit {
 
  Patients:Patient[]=[
   
  
  
  ];
  searchTerm:string

  notify:EventEmitter<string>=new EventEmitter<string>();
  dataFromChild:string;
  constructor(private _patientservice:PatientsService,private router:Router) { }



  ngOnInit() {
    this.Patients=this._patientservice.getPatients();
  }

  deletePatient(i:number){
    this.Patients.splice(i,1);
  }
  viewPatient(){
      
      this.router.navigate(['car']);

  
  }
editPatient(Patientfirstname:string){
 
  this.router.navigate(['/edit',Patientfirstname]);
}


mouseclick(){
  this.router.navigate(['editclinic'])
  
}

  

  
 

  
  
}


