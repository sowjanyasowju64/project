import { Component, OnInit } from '@angular/core';
import { User } from '../model/personal';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  user:User[]=[
   ];
  constructor( private _userservice:PersonalService) { }

  ngOnInit() {
    this.user=this._userservice.getUsers();
  }
 
}
