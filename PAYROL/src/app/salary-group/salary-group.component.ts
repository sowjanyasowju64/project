import { Component, OnInit } from '@angular/core';
import {salary} from '../model/salary-model';
import { from } from 'rxjs';
import { SalaryServicesService } from '../salary-services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-salary-group',
  templateUrl: './salary-group.component.html',
  styleUrls: ['./salary-group.component.scss']
})
export class SalaryGroupComponent implements OnInit {
 salarys:salary ={
   name:null,
   code:null,
   description:null,
   showSalaryComponents:null,
   action:null

 }
  constructor(private _salaryServicesService:SalaryServicesService, private _router:Router ) {}

    saveSalary():void{
      this._salaryServicesService.save(this.salarys);
      this._router.navigate(['salary']);
      console.log(this.salarys);
    }
   

  ngOnInit() {
  }

}
