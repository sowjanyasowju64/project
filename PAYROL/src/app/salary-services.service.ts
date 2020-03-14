import { Injectable } from '@angular/core';
import {salary} from './model/salary-model';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SalaryServicesService {
eissalary:salary []=[

];
getsalary():salary[]{
  return this.eissalary;
}
save(salarys:salary){
  this.eissalary.push(salarys);
}
  constructor() { }
}
 