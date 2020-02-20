import { Injectable } from '@angular/core';
import { Patient } from './models/patients.models';


@Injectable()
export class PatientsService{
     carPatients:Patient[]=[

   
   
    ];
    getPatients():Patient[]{
        return this.carPatients;

    }
    save(patient:Patient){
       
        
        this.carPatients.push(patient);

    }

   
  
}