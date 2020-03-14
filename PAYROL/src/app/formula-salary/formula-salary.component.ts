import { Component, OnInit } from '@angular/core';
import { FormulaService } from '../formula.service';
import { Router } from '@angular/router';
import { formula } from '../model/formula';
import { Search } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-formula-salary',
  templateUrl: './formula-salary.component.html',
  styleUrls: ['./formula-salary.component.scss']
})
export class FormulaSalaryComponent implements OnInit {
  
      formulas:formula ={
        name:null,  
        code:null,
       type:null,
       taxable:null,
       attendancebased:null,
       includedinCTC :null,
       isActive :null,
       value:null,
       balanceAmountItem:null,
       testAmount:null,
       action:null,
     
      }
      constructor(private _formulaService:FormulaService, private _router:Router ) {}

      saveformula():void{
        this._formulaService.save1(this.formulas);
        this._router.navigate(['payslip1']);
        console.log(this.formulas);
      }
      
     
  
    ngOnInit() {
    }
  
  
     
  
  public YearDetails: object = [];  
  public YearDetails1: object = [];  
  public YearDetails3: object = []; 
  public YearDetails4: object = [];
  public YearDetails5: object = [];
  public for4: object = [];
  public for5: object = [];
   

     public yearMonths= [{name:'Earnings'},{name:'Deduction'},{name:'statutory'}, {name:'Overtime'},{name:'Reimbursment'}, ];
     public for=[ {name:'fixed'},{name:'formula'} ];
    
      

     public Products = [  
   
 
       {Name:'statutory', employeename: '',  },  
       
        ];  
 
        public Products1=[
         {Name:'Deduction', employeename: '',  },  
         
        ];

        private _for4 = [
    { Name1: 'fixed', employeename: '', },
  ];

 
         private _for5 = [
    { Name1: 'formula', employeename: '', },
  ];

  private product5 = [
    { Name1: 'earnings', employeename: '', },
  ];

    
     getYear() {  
         console.log("getYear");  
         return this.yearMonths;  
      
     } 
     getfor(){
       console.log("getFor");
       return this.for;
     } 
   
   
    SearchYear(name: string) {  
   
         let obj = this.Products.filter(m => m.Name == name);  
         this.YearDetails = obj;  

         let obj1 = this.Products1.filter(m => m.Name == name);  
         this.YearDetails3 = obj1;
        let obj4 = this.Products1.filter(m => m.Name == name);  
         this.YearDetails4 = obj4;
      
         let for4= this._for4.filter(m => m.Name1 == name);  
         this.for4 = for4;
         
        
         let for5= this._for5.filter(m => m.Name1 == name);  
         this.for5= for5;

         return this.YearDetails;  
       
     } 
    }
    
  