import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hr-details',
  templateUrl: './hr-details.component.html',
  styleUrls: ['./hr-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HRDetailsComponent implements OnInit {
  selectNext(el){
    el.selectedIndex += 1;
  }
  selectNext1(el){
    el.selectedIndex -= 1;
  }
  constructor() { }

  ngOnInit() {
  }

}
