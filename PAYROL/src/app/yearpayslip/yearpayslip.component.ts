import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-yearpayslip',
  templateUrl: './yearpayslip.component.html',
  styleUrls: ['./yearpayslip.component.scss']
})
export class YearpayslipComponent implements OnInit {
  @ViewChild('content', {static: false}) content: ElementRef;
  // public downloadPDF() {
  //   const doc = new jspdf();

  //   const specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };

  //   const content = this.content.nativeElement;

  //   doc.fromHTML(content.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('test.pdf');
  // }
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
