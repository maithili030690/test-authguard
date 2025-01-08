import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
usersInfo!:Array<Iuser>
selectedUserId!:string;
  constructor(
    private _usersService:UsersService,
    private _router:Router,
    private _routes:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.usersInfo =this._usersService.fetchAllUsers()
    this.selectedUserId =this.usersInfo[0].userId
    this._router.navigate([this.usersInfo[0].userId],{
      relativeTo:this._routes
    })
   
  }
  onUserClick(users:Iuser){
    console.log(users)
    this.selectedUserId =users.userId
  }
}
