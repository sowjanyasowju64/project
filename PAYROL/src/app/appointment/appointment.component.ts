import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { ShowEmployeeService } from '../services/show-employee.service';
import { Employee } from '../model/show-employee';
import * as jspdf from 'jspdf';
import { PersonalService } from '../personal.service';
import { User } from '../model/personal';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  employee:Employee[]=[
  
  ];
  user:User[]=[
  ];
 
  constructor(private showemployee:ShowEmployeeService, private _userservice:PersonalService) { }

  ngOnInit() {
    this.employee=this.showemployee.getEmployees();
    this.user=this._userservice.getUsers();
  }
  deleteemp(i:number){
    this.employee.splice(i,1);
  }
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
}
