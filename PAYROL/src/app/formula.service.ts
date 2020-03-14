import { Injectable } from '@angular/core';
import {formula} from './model/formula';

import { from } from 'rxjs';
import { salary } from './model/salary-model';
@Injectable({
  providedIn: 'root'
})
export class FormulaService {
  eisformula:formula []=[

  ];
  getformula():formula[]{
    return this.eisformula;
  }
  save1(formulas:formula){
    this.eisformula.push(formulas);
  }
    constructor() { }
  }
