import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public education: any[] =[{
    name:'',
    university:'',
    
    year:'',
    graduate:'',
    reason:'',
    fpc:'',
    stream:''
    }];
    addeducation() {
      this.education.push({
      name:'',
      university:'',
      year:'',
      graduate:'',
      reason:'',
      fpc:'',
      stream:''
      });
    }
    removeeducation(i: number) {
      this.education.splice(i, 1);
    }
  constructor() { }

  ngOnInit() {
  }

}
