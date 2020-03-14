import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})

export class SecondComponent implements OnInit {
 
  displayedColumns: string[] = ['dates', 'intime', 'outtime', 'duration','days'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface PeriodicElement {
  intime: string;
  dates: string;
  outtime: number;
  duration: string;
  days:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
  {dates: '1/11/19', intime: 'Hydrogen', outtime: 1.0079, duration: 'H',days:''},
  {dates: '2//11/19', intime: 'Helium', outtime: 4.0026, duration: 'He',days:''},
  {dates: '3/11/19', intime: 'Lithium', outtime: 6.941, duration: 'Li',days:''},
  {dates: '4//11/19', intime: 'Beryllium', outtime: 9.0122, duration: 'Be',days:''},
  {dates: '5/11/19', intime: 'Boron', outtime: 10.811, duration: 'B',days:''},
  {dates: '6/11/19', intime: 'Carbon', outtime: 12.0107, duration: 'C',days:''},
  {dates: '7/11/19', intime: 'Nitrogen', outtime: 14.0067, duration: 'N',days:''},
  {dates: '8//11/19', intime: 'Oxygen', outtime: 15.9994, duration: 'O',days:''},
  {dates: '9/11/19', intime: 'Fluorine', outtime: 18.9984, duration: 'F',days:''},
  {dates: '10/11/19', intime: 'Neon', outtime: 20.1797, duration: 'Ne',days:''},
  {dates: '11/11/19', intime: 'Sodium', outtime: 22.9897, duration: 'Na',days:''},
  {dates: '12/11/19', intime: 'Magnesium', outtime: 24.305, duration: 'Mg',days:''},
  {dates: '13/11/19', intime: '', outtime: 26.9815, duration: 'Al',days:''},
  {dates: '14/11/19', intime: 'Silicon', outtime: 28.0855, duration: 'Si',days:''},
  {dates: '15/11/19', intime: 'Phosphorus', outtime: 30.9738, duration: 'P',days:''},
  {dates: '16/11/19', intime: 'Sulfur', outtime: 32.065, duration: 'S',days:''},
  {dates: '17/11/19', intime: 'Chlorine', outtime: 35.453, duration: 'Cl',days:''},
  {dates: '18/11/19', intime: 'Argon', outtime: 39.948, duration: 'Ar',days:''},
   {dates: '19/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
  {dates: '20/11/19', intime: 'Potassium', outtime: 39.0983, duration: 'K',days:''},
  {dates: '21/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
   {dates: '22/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
    {dates: '23/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
     {dates: '24/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
      {dates: '25/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
       {dates: '26/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
        {dates: '27/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
         {dates: '28/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
          {dates: '29/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
           {dates: '30/11/19', intime: 'Calcium', outtime: 40.078, duration: 'Ca',days:''},
];
console.log(JSON.stringify( ELEMENT_DATA));
