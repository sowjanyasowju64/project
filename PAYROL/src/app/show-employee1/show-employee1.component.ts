import { Component, OnInit } from '@angular/core';
import { ShowEmployeeService } from '../services/show-employee.service';
import { Employee } from '../model/show-employee';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';  
@Component({
  selector: 'app-show-employee1',
  templateUrl: './show-employee1.component.html',
  styleUrls: ['./show-employee1.component.scss']
})
export class ShowEmployee1Component implements OnInit {
  employee:Employee[]=[
   
  
  
  ];

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
  
  constructor(private showemployee:ShowEmployeeService) { }

  ngOnInit() {
    this.employee=this.showemployee.getEmployees();
    
  }
  
  

}
