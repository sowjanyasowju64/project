import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-home-tabs',
  templateUrl: './home-tabs.component.html',
  styleUrls: ['./home-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeTabsComponent implements OnInit {
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
