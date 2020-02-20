import { Component, OnInit, EventEmitter } from '@angular/core';
import { Patient } from '../models/patients.models';
import { PatientsService } from '../patients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

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


mouseclick(i:number){

  this.router.navigate(['editclinic'])
  
}


}
