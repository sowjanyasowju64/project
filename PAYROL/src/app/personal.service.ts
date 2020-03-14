import { Injectable } from '@angular/core';
import { User } from './model/personal';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  userlist:User[]=[ 
  ];
  getUsers():User[]{
      return this.userlist;

  }
  save(user:User){                                                         
     
      this.userlist.push(user);

  }
  constructor() { }
}
