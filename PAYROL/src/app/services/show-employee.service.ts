import { Injectable } from '@angular/core';
import { Employee } from '../model/show-employee';

@Injectable({
  providedIn: 'root'
})
export class ShowEmployeeService {
  showemployee1:Employee[]=[

   
   
  ];
  getEmployees():Employee[]{
      return this.showemployee1;

  }
  save(employee:Employee){
     
      
      this.showemployee1.push(employee);

  }

  constructor() { }
}
