import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userId!:string;
userInfo!:Iuser;
  constructor(
    private _routes:ActivatedRoute,
    private _userService:UsersService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this._routes.params
          .subscribe((params:Params)=>{
            console.log(params);
            this.userId =params['userId']
            this.userInfo = this._userService.fetchUser(this.userId)
          })

    // console.log(this._routes.snapshot.params['userId'])
    // this.userId =this._routes.snapshot.params['userId']
    // this.userInfo = this._userService.fetchUser(this.userId)
  }
  onUserRemove(){
    this._userService.removeUser(this.userId)
  }

  onEditUser(){
    this._router.navigate(['edit'],{
      relativeTo:this._routes,
      queryParamsHandling:'preserve'
    })
  }
}
