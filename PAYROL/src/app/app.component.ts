import { Component} from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  dates = 'PAYROL';

year:string;
month:string;
  name:string;

  private _values1 = ["2018-2019", "2019-2020", "2020-2021","2021-2022","2022-2023","2023-2024","2024-2025"];
  private _values2:object = [];
  private _values3:object = [];

 


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
  firstDropDownChanged1(val1: any,_values1:any) {
    this.month=val1;
    if ( val1=="JANUARY"){
     
      this._values3=
      [ 
        
     

        
        {Name:'JANUARY', dates: '01/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '02/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '03/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '04/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '05/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '06/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '07/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '08/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '09/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '10/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '11/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '12/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '13/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '14/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '15/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '16/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '17/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '18/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '19/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '20/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '21/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '22/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '23/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '24/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '25/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '26/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '27/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '28/01', intime: '', outtime: '',duration: '' },  

        {Name:'JANUARY', dates: '29/01', intime: '', outtime: '',duration: '' },  
        {Name:'JANUARY', dates: '30/01', intime: '', outtime: '',duration: '' },  
        
        {Name:'JANUARY', dates: '31/01', intime: '', outtime: '',duration: '' },  

      
        
      ];
      
    }
    
   

    
    else if(val1=="FEBRUARY"){
      this._values3=[


        
        {Name:'FEBRUARY', dates: '01/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '02/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '03/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '04/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '05/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '06/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '07/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '08/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '09/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '10/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '11/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '12/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '13/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '14/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '15/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '16/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '17/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '18/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '19/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '20/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '21/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '22/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '23/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '24/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '25/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '26/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '27/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '28/02', intime: '', outtime: '',duration: '' }, 
        {Name:'FEBRUARY', dates: '29/02', intime: '', outtime: '',duration: '' },  
        {Name:'FEBRUARY', dates: '30/02', intime: '', outtime: '',duration: '' }, 
        {Name:'FEBRUARY', dates: '31/02', intime: '', outtime: '',duration: '' }, 
       

        
      ];
    }



    else if(val1=="MARCH"){
      this._values3=[


        {Name:'MARCH', dates: '01/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '02/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '03/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '04/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '05/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '06/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '07/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '08/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '09/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '10/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '11/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '12/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '13/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '14/31', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '15/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '16/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '17/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '18/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '19/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '20/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '21/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '22/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '23/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '24/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '25/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '26/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '27/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '28/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '29/03', intime: '', outtime: '',duration: '' },  
        {Name:'MARCH', dates: '30/03', intime: '', outtime: '',duration: '' },
        {Name:'MARCH', dates: '31/03', intime: '', outtime: '',duration: '' },
           

        
        
        




      ];
    }



    else if(val1=="APRIL"){
      this._values3=[

        {Name:'APRIL', dates: '01/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '02/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '03/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '04/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '05/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '06/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '07/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '08/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '09/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '10/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '11/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '12/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '13/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '14/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '15/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '16/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '17/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '18/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '19/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '20/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '21/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '22/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '23/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '24/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '25/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '26/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '27/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '28/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '29/04', intime: '', outtime: '',duration: '' },  
        {Name:'APRIL', dates: '30/04', intime: '', outtime: '',duration: '' },
        {Name:'FEBRUARY', dates: '31/04', intime: '', outtime: '',duration: '' }, 
       
       
        

        
        
        


        
        



        
      ];
    }



    else if(val1=="MAY"){
      this._values3=[


        
        {Name:'MAY', dates: '01/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '02/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '03/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '04/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '05/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '06/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '07/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '08/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '09/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '10/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '11/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '12/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '13/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '14/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '15/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '16/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '17/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '18/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '19/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '20/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '21/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '22/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '23/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '24/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '25/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '26/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '27/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '28/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '29/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        {Name:'MAY', dates: '30/05', intime: '555', outtime: '',duration: '15-BS0103DX' },
        {Name:'MAY', dates: '31/05', intime: '555', outtime: '',duration: '15-BS0103DX' },  
        

        
        

        
        
        


        
      ];
    }



    else if(val1=="JUNE"){
      this._values3=[

     
        {Name:'JUNE', dates: '01/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '02/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '03/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '04/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '05/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '06/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '07/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '08/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '09/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '10/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '11/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '12/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '13/06', intime: '', outtime: '',duration: '' },  
      
        {Name:'JUNE', dates: '14/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '15/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '16/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '17/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '18/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '19/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '20/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '21/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '22/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '23/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '24/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '25/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '26/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '27/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '28/06', intime: '', outtime: '',duration: '' },  
        {Name:'JUNE', dates: '29/06', intime: '', outtime: '',duration: '' },
        {Name:'JUNE', dates: '30/06', intime: '', outtime: '',duration: '' },
        {Name:'JUNE', dates: '31/06', intime: '', outtime: '',duration: '' },
      

      

        
        


        
      ];
    }
    else if(val1=="JULY"){
      this._values3=[

    
        {Name:'JULY', dates: '01/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '02/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '03/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '04/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '05/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '06/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '07/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '08/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '09/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '10/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '11/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '12/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '13/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '14/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '15/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '16/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '17/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '18/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '19/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '20/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '21/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '22/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '23/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '24/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '25/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '26/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '27/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '28/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '29/07', intime: '777', outtime: '',duration: '' },  
        {Name:'JULY', dates: '30/07', intime: '777', outtime: '',duration: '' },
        {Name:'JULY', dates: '31/07', intime: '777', outtime: '',duration: '' },  
        

        


        
      ];
    }
    else if(val1=="AUGUST"){
      this._values3=[


      
        {Name:'AUGUST', dates: '01/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '02/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '03/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '04/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '05/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '06/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '07/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '08/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '09/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '10/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '11/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '12/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '13/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '14/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '15/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '16/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '17/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '18/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '19/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '20/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '21/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '22/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '23/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '24/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '25/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '26/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '27/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '28/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '29/08', intime: '', outtime: '',duration: '' },  
        {Name:'AUGUST', dates: '30/08', intime: '', outtime: '',duration: '' },
        {Name:'AUGUST', dates: '31/08', intime: '', outtime: '',duration: '' },  
        

         
        


        
      ];
    }
    else if(val1=="SEPTEMBER"){
      this._values3=[


       
        {Name:'SEPTEMBER', dates: '01/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '02/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '03/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '04/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '05/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '06/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '07/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '08/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '09/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '10/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '11/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '12/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '13/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '14/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '15/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '16/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '17/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '18/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '19/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '20/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '21/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '22/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '23/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '24/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '25/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '26/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '27/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '28/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '29/09', intime: '', outtime: '',duration: '' },  
        {Name:'SEPTEMBER', dates: '30/09', intime: '', outtime: '',duration: '' },
        {Name:'SEPTEMBER', dates: '31/09', intime: '', outtime: '',duration: '' },
    
        
        
    
        
        


        
      ];
    }
    else if(val1=="OCTOBER"){
      this._values3=[
        
        {Name:'OCTOBER', dates: '01/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '02/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '03/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '04/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '05/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '06/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '07/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '08/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '09/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '10/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '11/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '12/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '13/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '14/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '15/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '16/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '17/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '18/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '19/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '20/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '21/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '22/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '23/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '24/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '25/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '26/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '27/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '28/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '29/10', intime: '', outtime: '',duration: '' },  
        {Name:'OCTOBER', dates: '30/10', intime: '', outtime: '',duration: '' },
        {Name:'OCTOBER', dates: '31/10', intime: '', outtime: '',duration: '' },  
        

         
        
        

     


        
      ];
    }
    else if(val1=="NOVEMBER"){
      this._values3=[

       
        {Name:'NOVEMBER', dates: '01/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '02/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '03/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '04/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '05/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '06/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '07/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '08/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '09/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '10/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '11/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '12/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '13/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '14/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '15/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '16/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '17/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '18/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '19/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '20/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '21/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '22/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '23/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '24/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '25/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '26/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '27/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '28/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '29/11', intime: '', outtime: '',duration: '' },  
        {Name:'NOVEMBER', dates: '30/11', intime: '', outtime: '',duration: '' },
        {Name:'NOVEMBER', dates: '31/11', intime: '', outtime: '',duration: '' },




        
      ];
    }
    else if(val1=="DECEMBER"){
      this._values3=[

    
        {Name:'DECEMBER', dates: '01/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '02/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '03/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '04/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '05/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '06/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '07/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '08/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '09/12', intime: '', outtime: '',duration: '' },
        {Name:'DECEMBER', dates: '10/12', intime: '', outtime: '',duration: '' },   
        {Name:'DECEMBER', dates: '11/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '12/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '13/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '14/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '15/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '16/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '17/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '18/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '19/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '20/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '21/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '22/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '23/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '24/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '25/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '26/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '27/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '28/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '29/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '30/12', intime: '', outtime: '',duration: '' },  
        {Name:'DECEMBER', dates: '31/12', intime: '', outtime: '',duration: '' },
      

        
        
        
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
       
       
        {Name:'sep', dates: '1/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '2/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '03/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '04/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '04/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '6/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '7/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '8/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '9/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '10/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '09/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '12/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '103/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '104/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '104/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '16/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '17/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '18/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '19/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '20/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '21/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '22/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '203/09', intime: '', outtime: '',duration: '' }, 
        {Name:'sep', dates: '204/09', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '204/09', intime: '', outtime: '',duration: '' },  
          {Name:'OCTOBER', dates: '26/09', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '27/09', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '28/09', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '29/09', intime: '', outtime: '',duration: '' }, 
          {Name:'OCTOBER', dates: '030/09', intime: '', outtime: '',duration: '' },
          {Name:'OCTOBER', dates: '031/09', intime: '', outtime: '',duration: '' },




          {Name:'JANUARY', dates: '1/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '2/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '03/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '04/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '04/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '6/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '7/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '8/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '9/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '10/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '09/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '12/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '103/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '104/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '104/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '16/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '17/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '18/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '19/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '20/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '21/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '22/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '203/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '204/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '204/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '26/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '27/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '28/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '29/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '030/01/20', intime: '', outtime: '',duration: '' },  
      {Name:'JANUARY', dates: '031/01/20', intime: '', outtime: '',duration: '' },  

         
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




    
  
  
}


  

