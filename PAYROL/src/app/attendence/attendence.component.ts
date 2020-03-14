import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { stringify } from 'querystring';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.scss']
})
export class AttendenceComponent implements OnInit {



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
  


  selectNext(el){
    el.selectedIndex += 1;
  }
  selectNext1(el){
    el.selectedIndex -= 1;
  }
  year:string;
month:string;
  name:string;
  NAME:string;


  private _values1 = ["2018-2019", "2019-2020", "2020-2021","2021-2022","2022-2023","2023-2024","2024-2025"];
  private _values2:object = [];
  private _values3:object = [];
  private _values4= ["2018-2019", "2019-2020", "2020-2021","2021-2022","2022-2023","2023-2024","2024-2025"];
  private _values5:object = [];



  firstDropDownChanged(val: any) {
    console.log(val);
    this.year=val;


    if (val == "2018-2019") {

      this._values2 = ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
    }

    else if (val == "2019-2020") {
      this._values2 = ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
    }
    else if (val == "2020-2021") {
      this._values2 =  ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
    }
      else if (val == "2021-2022") {
        this._values2 =  ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
    }
  
  else if (val == "2022-2023") {
    this._values2 =  ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
}
else if (val == "2023-2024") {
  this._values2 =  ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
}
else if (val == "2024-2025") {
  this._values2 =   ["APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER","JANUARY", "FEBRUARY", "MARCH",];
}
    else {
      this._values2 = ["1","2","03"];
    }
    



  }
  firstDropDownChanged1(val1: any) {
  
    if ( val1=="JANUARY"){
      this.month=val1;
      this._values3=
      [ 
        
     

        
        {Name:'JANUARY', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '28', intime: '', outtime: '',duration: '' },  

        {Name:'JANUARY', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '30', intime: '', outtime: '',duration: '' },  
        
        {Name:'JANUARY', dates: '31', intime: '', outtime: '',duration: '' },  

      
        
      ];
      
    }
    
   

    
    else if(val1=="FEBRUARY"){
      this._values3=[


        
        {Name:'FEBRUARY', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '28', intime: '', outtime: '',duration: '' }, 
        {Name:'FEBRUARY', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '30', intime: '', outtime: '',duration: '' }, 
        {Name:'FEBRUARY', dates: '31', intime: '', outtime: '',duration: '' }, 
       

        
      ];
    }



    else if(val1=="MARCH"){
      this._values3=[


        {Name:'MARCH', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'MARCH', dates: '31', intime: '', outtime: '',duration: '' },
           

        
        
        




      ];
    }



    else if(val1=="APRIL"){
      this._values3=[

        {Name:'APRIL', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'FEBRUARY', dates: '31', intime: '', outtime: '',duration: '' }, 
       
       
        

        
        
        


        
        



        
      ];
    }



    else if(val1=="MAY"){
      this._values3=[


        
        {Name:'MAY', dates: '01', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '02', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '03', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '04', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '06', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '07', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '08', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '09', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '10', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '11', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '12', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '13', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '14', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '15', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '16', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '17', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '18', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '19', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '20', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '21', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '22', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '23', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '24', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '25', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '26', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '27', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '28', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '29', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '30', intime: '555', outtime: '',duration: '15-BS0103DX' },
        {Name:'MAY', dates: '31', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        

        
        

        
        
        


        
      ];
    }



    else if(val1=="JUNE"){
      this._values3=[

     
        {Name:'JUNE', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '13', intime: '', outtime: '',duration: '' },  
      
        {Name:'JUNE', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '29', intime: '', outtime: '',duration: '' },
        {Name:'JUNE', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'JUNE', dates: '31', intime: '', outtime: '',duration: '' },
      

      

        
        


        
      ];
    }
    else if(val1=="JULY"){
      this._values3=[

    
        {Name:'JULY', dates: '01', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '02', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '03', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '04', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '05', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '06', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '08', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '09', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '10', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '11', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '12', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '13', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '14', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '15', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '16', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '17', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '18', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '19', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '20', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '21', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '22', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '23', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '24', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '25', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '26', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '27', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '28', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '29', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '30', intime: '777', outtime: '',duration: '' },
        {Name:'JULY', dates: '31', intime: '777', outtime: '',duration: '' },  
        

        


        
      ];
    }
    else if(val1=="AUGUST"){
      this._values3=[


      
        {Name:'AUGUST', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'AUGUST', dates: '31', intime: '', outtime: '',duration: '' },  
        

         
        


        
      ];
    }
    else if(val1=="SEPTEMBER"){
      this._values3=[


       
        {Name:'SEPTEMBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'SEPTEMBER', dates: '31', intime: '', outtime: '',duration: '' },
    
        
        
    
        
        


        
      ];
    }
    else if(val1=="OCTOBER"){
      this._values3=[
        
        {Name:'OCTOBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'OCTOBER', dates: '31', intime: '', outtime: '',duration: '' },  
        

         
        
        

     


        
      ];
    }
    else if(val1=="NOVEMBER"){
      this._values3=[

       
        {Name:'NOVEMBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '09', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '10', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '30', intime: '', outtime: '',duration: '' },
        {Name:'NOVEMBER', dates: '31', intime: '', outtime: '',duration: '' },




        
      ];
    }
    else if(val1=="DECEMBER"){
      this._values3=[

    
        {Name:'DECEMBER', dates: '01', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '02', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '03', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '04', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '05', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '06', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '07', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '08', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '09', intime: '', outtime: '',duration: '' },
        {Name:'DECEMBER', dates: '10', intime: '', outtime: '',duration: '' },   
        {Name:'DECEMBER', dates: '11', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '13', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '14', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '15', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '16', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '17', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '18', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '19', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '20', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '21', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '22', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '23', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '24', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '25', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '26', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '27', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '28', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '29', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '30', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '31', intime: '', outtime: '',duration: '' },
      

        
        
        
      ];
    }



    else{
      this._values3 = ["1","2","03"];
    }

  }
 


  



  /*
  public monthsDetails: object = [];  

  //filter product details on name and return monthsDetails object.
    public ProductHeader = [{name:'sep'}, { name: 'OCTOBER' },{ name: 'NOVEMBER' }, { name: 'DECEMBER'},{name:'JANUARY'}];  
    
    public months = [  
       
      {Name:'NOVEMBER', dates: '1/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '2/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '03/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '04/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '04/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '6/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '7/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '8/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '9/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '10/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '09/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '12/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '103/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '104/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '104/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '16/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '17/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '18/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '19/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '20/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '21/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '22/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '203/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '204/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '204/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '26/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '27/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '28/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '29/11', intime: '', outtime: '',duration: '' },  
      {Name:'NOVEMBER', dates: '030/11', intime: '', outtime: '',duration: '' },  
      





      {Name:'DECEMBER', dates: '1/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '2/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '03/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '04/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '04/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '6/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '7/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '8/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '9/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '10/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '09/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '12/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '103/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '104/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '104/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '16/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '17/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '18/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '19/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '20/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '21/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '22/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '20312', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '204/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '204/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '26/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '27/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '28/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '29/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '030/12', intime: '', outtime: '',duration: '' },  
      {Name:'DECEMBER', dates: '031/12', intime: '', outtime: '',duration: '' },  
      

      {Name:'OCTOBER', dates: '1/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '2/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '03/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '04/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '04/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '6/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '7/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '8/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '9/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '10/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '09/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '12/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '103/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '104/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '104/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '16/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '17/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '18/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '19/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '20/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '21/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '22/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '203/10', intime: '', outtime: '',duration: '' }, 
      {Name:'OCTOBER', dates: '204/10', intime: '', outtime: '',duration: '' }, 
        {Name:'OCTOBER', dates: '204/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '26/10', intime: '', outtime: '',duration: '' }, 
        {Name:'OCTOBER', dates: '27/10', intime: '', outtime: '',duration: '' }, 
        {Name:'OCTOBER', dates: '28/10', intime: '', outtime: '',duration: '' }, 
        {Name:'OCTOBER', dates: '29/10', intime: '', outtime: '',duration: '' }, 
        {Name:'OCTOBER', dates: '030/10', intime: '', outtime: '',duration: '' },
        {Name:'OCTOBER', dates: '031/10', intime: '', outtime: '',duration: '' },
       
       
        {Name:'sep', dates: '1', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '2', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '03', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '04', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '04', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '6', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '7', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '8', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '9', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '10', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '12', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '103', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '104', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '104', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '16', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '17', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '18', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '19', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '20', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '21', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '22', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '203', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '204', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '204', intime: '', outtime: '',duration: '' },  
          {Name:'OCTOBER', dates: '26', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '27', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '28', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '29', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '030', intime: '', outtime: '',duration: '' },
          {Name:'OCTOBER', dates: '031', intime: '', outtime: '',duration: '' },




          {Name:'JANUARY', dates: '1/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '2/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '03/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '04/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '04/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '6/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '7/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '8/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '9/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '10/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '09/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '12/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '103/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '104/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '104/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '16/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '17/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '18/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '19/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '20/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '21/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '22/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '203/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '204/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '204/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '26/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '27/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '28/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '29/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '030/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '031/20', intime: '', outtime: '',duration: '' },  

         
       ];  
  
    constructor() {  
      
        this.getmonths();  
        this.name = 'Angular2'
    }  
    getmonths() {  
        console.log("getmonths");  
        return this.ProductHeader;  
    }  
  
  
    SearchProduct(name: string) {  
  
        let obj = this.months.filter(m => m.Name == name);  
        this.monthsDetails = obj;  
        return this.monthsDetails;  
    }  */



  
  ngOnInit() {
  }

  }
