import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.scss']
})
export class FinancialYearComponent implements OnInit {

  public YearDetails: object = [];  

  
    public YearHeader= [{name:"2019-2020"},{name:'2018-2019'}];  
    
    public Products = [  
      {Name:'2018-2019', month: 'April', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'May', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'June', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'July', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'August', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'September', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'October', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'November', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'December', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'January', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'February', days: '', APL: '', ACL: '' },  
      {Name:'2018-2019', month: 'March', days: '', APL: '', ACL: '' },  

      {Name:'2019-2020', month: 'April', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'May', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'June', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'July', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'August', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'September', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'October', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'November', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'December', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'January', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'February', days: '', APL: '', ACL: '' },  
      {Name:'2019-2020', month: 'March', days: '', APL: '', ACL: '' },  
     

       
       ];  
  
    constructor() {  
      
        this.getYear();  
    }  
    getYear() {  
        console.log("getYear");  
        return this.YearHeader;  
    }  
  
  
   SearchYear(name: string) {  
  
        let obj = this.Products.filter(m => m.Name == name);  
        this.YearDetails = obj;  
        return this.YearDetails;  
    }  

  



  ngOnInit() {
  }

}
