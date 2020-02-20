import { PipeTransform ,Pipe} from '@angular/core';
import { Patient } from './models/patients.models';
@Pipe({
 name:'patientFilter'
})


export class PatientFilterPipe implements PipeTransform{

    transform(patients:Patient[],searchTerm:string):Patient[]{


    if(!patients || ! searchTerm)   
    {
        return patients;
    } 
    return patients.filter(Patients => Patients.firstname.toLowerCase().indexOf(searchTerm.toLowerCase() )!==-1);
    }
}