import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {

  currUser: User;

  constructor() { 
     this.currUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }
  
  isAdmin(){
    if(this.currUser.role === "ADMIN")
        return true;
    else
        return false;
}
}
