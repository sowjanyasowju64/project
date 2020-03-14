import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workpattern',
  templateUrl: './workpattern.component.html',
  styleUrls: ['./workpattern.component.scss']
})
export class WorkpatternComponent implements OnInit {

  

private fieldArray: Array<any> = [];
private newAttribute: any = {};

addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {}; 
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}

constructor() { }

ngOnInit() { }

}


  // newEmployeeClicked = false;

  // employees = [ 
  //   { name: 'WA', wdays: '5', week:'2', days:'Sat & Sun Days'},
  //   { name: 'WB', wdays: '6', week:'1', days:'Saturday'},
  //   { name: 'WC', wdays: '7', week:'0', days:'---'},
  // ];

  // color;

  // }

  // model: any = {};
  // model2: any = {}; 

  // addEmployee() {
  //   this.employees.push(this.model);
  //   this.model = {};
  // }

  // deleteEmployee(i) {
  //   this.employees.splice(i,1);
  //   console.log(i);
  // }

  // myValue;

  // editEmployee(editEmployeeInfo) {
  //   this.model2.name = this.employees[editEmployeeInfo].name;
  //   this.model2.wdays = this.employees[editEmployeeInfo].wdays;
  //   this.myValue = editEmployeeInfo;
  // }

  // updateEmployee() {
  //   let editEmployeeInfo = this.myValue;
  //   for(let i = 0; i < this.employees.length; i++) {
  //     if(i == editEmployeeInfo) {
  //       this.employees[i] = this.model2;
  //       this.model2 = {};
  //     }
  //   }
  // }


  // addNewEmployeeBtn() {
  //   this.newEmployeeClicked = !this.newEmployeeClicked;
  // }

  //  changeColorOne() {
  //    this.color = !this.color;
  //    if (this.color) {
  //      return '#ffffff';
  //    } else {
  //     return '#f6f6f6';
  //    }
  // }
  // public relationship: any[] =[{
  //   code:'',
  //   wdays:'',
  //   week:'',
  //   days:'',
   
  //   }];
  //   addrelationship() {
  //     this.relationship.push({
  //       code:'',
  //       wdays:'',
  //       week:'',
  //       days:'',
       
      
  //     });
  //   }
  //   remove(i) {
  //     this.relationship.splice(i, 1);
  //   }




