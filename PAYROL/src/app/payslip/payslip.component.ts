import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.scss']
})
export class PayslipComponent implements OnInit {

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
      pdf.save('PAYSLIP.pdf'); // Generated PDF   
    });  
  }
  selectNext(el){
    el.selectedIndex += 1;
  }
  selectNext1(el){
    el.selectedIndex -= 1;
  }

 public YearDetails: object = [];  
 public YearDetails1: object = [];  
 public YearDetails3: object = [];  

 public YearDetails4: object = [];  
 public YearDetails5: object = []; 
 public YearHeader: object = [];  



 private _values1 = ["2018-2019", "2019-2020", "2020-2021","2021-2022","2022-2023","2023-2024","2024-2025"];
  
    
    



    firstDropDownChanged(val: any) {
      console.log(val);
      
  
  
      if (val == "2018-2019") {
  
        this.YearHeader = [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
      }
  
      else if (val == "2019-2020") {
        this.YearHeader = [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
      }
      else if (val == "2020-2021") {
        this.YearHeader =  [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
      }
        else if (val == "2021-2022") {
          this.YearHeader =  [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
      }
    
    else if (val == "2022-2023") {
      this.YearHeader =  [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
  }
  else if (val == "2023-2024") {
    this.YearHeader =  [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
  }
  else if (val == "2024-2025") {
    this.YearHeader =   [{name:''},{name:'April'},{name:"May"},{name:"June"},{name:"July"},{name:"August"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"},{name:"Jan"},{name:"Feb"},{name:"Mar"}];
  }
      else {
        this.YearHeader = ["1","2","03"];
      }
      
  
  
  
    }




    public Products = [  
      {Name:'April', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'April', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'April', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'April', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'April', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'April', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'April', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      

      {Name:'May', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'May', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'May', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'May', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'May', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'May', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'May', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  



      {Name:'June', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'June', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'June', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'June', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'June', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'June', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'June', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
     
      {Name:'July', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'July', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'July', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'July', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'July', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'July', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'July', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  




      {Name:'August', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'August', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'August', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'August', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'August', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'August', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'August', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      



      {Name:'Sep', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Sep', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Sep', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Sep', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Sep', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Sep', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'Sep', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      
     
      {Name:'Oct', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Oct', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Oct', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Oct', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Oct', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Oct', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'Oct', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      
     
      {Name:'Nov', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Nov', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Nov', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Nov', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Nov', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Nov', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'Nov', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      

      {Name:'Dec', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Dec', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Dec', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Dec', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Dec', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Dec', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'Dec', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      
     
      
      {Name:'Jan', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Jan', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Jan', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Jan', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Jan', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Jan', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'Jan', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      
     
      {Name:'Feb', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Feb', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Feb', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Feb', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Feb', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Feb', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'feb', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
      
      {Name:'Mar', employeename: 'Emloyeename', days: 'Total days', APL: '', ACL: '' },  
      {Name:'Mar', employeename: 'Employee Code', days: 'Paid Days', APL: '', ACL: '' },  
      {Name:'Mar', employeename: 'Designation', days: ' Loss of Day', APL: '', ACL: '' },  
      {Name:'Mar', employeename: 'Department', days: 'Pan No',        APL: '', ACL: '' },  
      {Name:'Mar', employeename: 'Bank Name', days: 'Location',         APL: '', ACL: '' },  
      {Name:'Mar', employeename: 'Bank Account No', days: ' Grade',       APL: '', ACL: '' },  
      {Name:'Mar', employeename: 'Aadhar No', days: ' Joining date',         APL: '', ACL: '' },  
   
       ];  

       public Products3=[
        {Name:'April', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },  
        {Name:'May', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },  
        {Name:'June', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },  
        {Name:'July', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' }, 
        {Name:'August', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },  
        {Name:'Sep', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },
        {Name:'Oct', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },   
        {Name:'Nov', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },   
        {Name:'Dec', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },   
        {Name:'Jan', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },   
        {Name:'Feb', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },   
        {Name:'Mar', employeename: 'Earnings', days: ' DEDUCTION',         APL: '', ACL: '' },   


       ];

  


       public Products1=[

        {Name:'April', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
     
        {Name:'April', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Medical Allowance', days: '',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        {Name:'April', employeename: 'Onsite Allowances', days: '',         APL: '', ACL: '' },  
       
        {Name:'April', employeename: 'Total Earnings', days: ' Total Deductions',         APL: '', ACL: '' },  



        {Name:'May', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
     
        {Name:'May', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        {Name:'May', employeename: 'Onsite Allowances', days: '',         APL: '', ACL: '' },  
       
        {Name:'May', employeename: 'Total Earnings', days: ' Total Deductions',         APL: '', ACL: '' },  
       
       


        {Name:'June', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
     
        {Name:'June', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        {Name:'June', employeename: 'Onsite Allowances', days: '',         APL: '', ACL: '' },  
       
        {Name:'June', employeename: 'Total Earnings', days: ' Total Deductions',         APL: '', ACL: '' },  
       
       
  
      


        {Name:'July', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
     
        {Name:'July', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        {Name:'July', employeename: 'Onsite Allowances', days: '',         APL: '', ACL: '' },  
       
        {Name:'July', employeename: 'Total Earnings', days: ' Total Deductions',         APL: '', ACL: '' },  


        {Name:'August', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
     
        {Name:'August', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        {Name:'August', employeename: 'Onsite Allowances', days: '',         APL: '', ACL: '' },  
       
        {Name:'August', employeename: 'Total Earnings', days: ' Total Deductions',         APL: '', ACL: '' },
        
        


        {Name:'Sep', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
     
        {Name:'Sep', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Sep', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Sep', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'Sep', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Sept', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Sep', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Sep', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        {Name:'Sep', employeename: 'Onsite Allowances', days: '',         APL: '', ACL: '' },  
       
        {Name:'Sep', employeename: 'Total Earnings', days: ' Total Deductions',         APL: '', ACL: '' },




        
        {Name:'Oct', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
  
        {Name:'Oct', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Oct', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Oct', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'Oct', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Oct', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Oct', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Oct', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  




        {Name:'Nov', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
  
        {Name:'Nov', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Nov', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Nov', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'Nov', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Nov', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Nov', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Nov', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        


        {Name:'Dec', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
  
        {Name:'Dec', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Dec', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Dec', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'Dec', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Dec', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Dec', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Dec', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  



        {Name:'Jan', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
  
        {Name:'Jan', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Jan', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Jan', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'Jan', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Jan', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Jan', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Jan', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        
        

        {Name:'Feb', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
  
        {Name:'Feb', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Feb', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Feb', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'feb', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Feb', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Feb', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Feb', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        

        {Name:'Mar', employeename: 'Basic', days: ' Professional Tax',         APL: '', ACL: '' },  
  
        {Name:'Mar', employeename: 'House Rent Allowance', days: ' PF',         APL: '', ACL: '' },  
       
        {Name:'Mar', employeename: 'Conveyance', days: ' Group Insurance',         APL: '', ACL: '' },  
       
        {Name:'Mar', employeename: 'Special Allowance', days: ' PLP',         APL: '', ACL: '' },  
       
        {Name:'Mar', employeename: 'Medical Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Mar', employeename: 'Telephone', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Mar', employeename: 'Leave Travel Allowance', days: ' ',         APL: '', ACL: '' },  
       
        {Name:'Mar', employeename: 'Other Allowances', days: ' ',         APL: '', ACL: '' },  
        
        
        
        

       ];
       public Products4=[
        {Name:'April', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' },  
        {Name:'May', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' },  
        {Name:'June', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'July', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'August', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Sep', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Oct', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Nov', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Dec', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Jan', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Feb', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Mar', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 


       ];


       public Products5=[
        {Name:'April', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' },  
        {Name:'May', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' },  
        {Name:'June', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' },  
        {Name:'July', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' },  
        {Name:'August', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Sep', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Oct', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Nov', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Dec', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Jan', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Feb', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 
        {Name:'Mar', employeename: 'Net Pay', days: ' ',         APL: '', ACL: '' }, 



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
        
        let obj1 = this.Products1.filter(m => m.Name == name);  
        this.YearDetails1 = obj1;  

        let obj3 = this.Products3.filter(m => m.Name == name);  
        this.YearDetails3 = obj3;


        let obj4 = this.Products4.filter(m => m.Name == name);  
        this.YearDetails4 = obj4;
       

        let obj5 = this.Products5.filter(m => m.Name == name);  
        this.YearDetails5 = obj5;

        return this.YearDetails;  
      
    }  

  


 

  ngOnInit() {
  }

}
