import { Component, OnInit } from '@angular/core';
import { salary } from '../model/salary-model';
import { SalaryServicesService } from '../salary-services.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {
salarys:salary[] =[];

  constructor(private _salaryServiceService:SalaryServicesService) { }

  ngOnInit() {
    this.salarys=this._salaryServiceService.getsalary();
    }
  

}
