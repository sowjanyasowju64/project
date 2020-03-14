import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holidaylist',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.scss']
})
export class HolidaylistComponent implements OnInit {


  public YearDetails: object = [];  

  
  public YearHeader= [{year:"2020"},{year:'2019'}];  
  
  public Products = [  
    {Year:'2019', date: '14-01-2019', day: 'Monday', holiday: 'Sankranthi', },  
    {Year:'2019', date: '26-01-2019', day: 'Saturday',holiday: 'Republic Day', },  
    {Year:'2019', date: '06-04-2019', day: 'Saturday',holiday:'Hindu New Year', },  
    {Year:'2019', date: '05-06-2019', day: 'Wednesday',holiday:'Ramzan', },  
    {Year:'2019', date: '15-08-2019', day: 'Monday',holiday:'Independence Day', },
    {Year:'2019', date: '02-09-2019', day: 'Monday',holiday:'Ganesh Chaturthi', },  
    {Year:'2019', date: '02-10-2019', day: 'Wednesday',holiday:'Gandhi Jayanthi', },  
    {Year:'2019', date: '08-10-2019', day: 'Tuesday',holiday:'Dussera', },  
    {Year:'2019', date: '25-12-2019', day: 'Wednesday',holiday:'Christmas', },  
  
    {Year:'2020', date: '15-01-2020', day: 'Wednesday', holiday: 'Sankranthi', },  
    {Year:'2020', date: '25-03-2020', day: 'Wednesday',holiday: 'Ughadhi', },  
    {Year:'2020', date: '01-05-2020', day: 'Friday',holiday:'May day', },  
    {Year:'2020', date: '25-05-2020', day: 'Wednesday',holiday:'Ramzan', },  
    {Year:'2020', date: '15-08-2020', day: 'Saturday',holiday:'Independence Day', },  
    {Year:'2020', date: '22-08-2020', day: 'Saturday',holiday:'Ganesh Chaturthi', },  
    {Year:'2020', date: '02-10-2020', day: 'Friday',holiday:'Gandhi Jayanthi', },  
    {Year:'2020', date: '14-11-2020', day: 'Tuesday',holiday:'Diwali', }, 
    {Year:'2020', date: '25-12-2020', day: 'Friday',holiday:'Christmas', },   

  

     
     ];  

  constructor() {  
    
      this.getYear();  
  }  
  getYear() {  
      console.log("getYear");  
      return this.YearHeader;  
  }  


 SearchYear(Year: string) {  

      let obj = this.Products.filter(m => m.Year == Year);  
      this.YearDetails = obj;  
      return this.YearDetails;  
  }  



  ngOnInit() {
  }

}