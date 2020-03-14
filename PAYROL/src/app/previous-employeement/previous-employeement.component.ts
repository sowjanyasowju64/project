import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-employeement',
  templateUrl: './previous-employeement.component.html',
  styleUrls: ['./previous-employeement.component.scss']
})
export class PreviousEmployeementComponent implements OnInit {
  
  public employeement: any[] =[{
    name:'',
   reliving:'',
    dob:'',
   payslips:'',
 
   offer:'',
    leaving:'',
    contract:'',
    fpc:'',
    years:'',
    fromto:'',
    designation:'',
    SNO:''

    
    }];
    addemployeement() {
      this.employeement.push({
        name:'',
        reliving:'',
         dob:'',
        payslips:'',
      
        offer:'',
         leaving:'',
         contract:'',
         fpc:'',
         years:'',
         fromto:'',
         designation:'',
         SNO:''
      
      });
    }
    removeemployeement(i: number) {
      this.employeement.splice(i, 1);
    }

    
  constructor() { }

  ngOnInit() {
  }

}
