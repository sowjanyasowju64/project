import { Component, OnInit } from '@angular/core';
import { formula} from '../model/formula';
import {FormulaService} from '../formula.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-salary-show',
  templateUrl: './salary-show.component.html',
  styleUrls: ['./salary-show.component.scss']
})
export class SalaryShowComponent implements OnInit {
  formulas:formula[] =[];

  removeeducation(i: number) {
    this.formulas.splice(i, 1);
  }
  constructor(private _formulaservice:FormulaService) { }

  ngOnInit() {
    this.formulas=this._formulaservice.getformula();
    }
  

}