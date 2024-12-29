import { Injectable } from '@angular/core';
import { Iuser } from '../models/users';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersArr:Array<Iuser>=[
    {
      userName:"Jhon Doe",
      userId:"123",
      userRole:"Candidate"
    },
    {
      userName:"June Doe",
      userId:"124",
      userRole:"Admin"
    },
    {
      userName:"July Doe",
      userId:"125",
      userRole:"Candidate"
    }
  ]
  
  constructor(
    private _router:Router,
    private _snackbarService:SnackbarService
  ) { }
  fetchAllUsers():Array<Iuser>{
    //api call to fetch all users
    return this.usersArr
  }
  fetchUser(id:string):Iuser{
    //Api call to fetch user
    return this.usersArr.find(user=>user.userId===id)!
  }
  postUser(user:Iuser){
    //api call to add new user
    this.usersArr.push(user)
    //navigate to users-dashboard
    this._router.navigate(['users'])
    this._snackbarService.openSnackBar(`New User ${user.userName} is Added successfully`)
  }
  updateUser(updatedUser:Iuser){
    //api call update user
    let getIndex = this.usersArr.findIndex(user=>user.userId===updatedUser.userId)
    this.usersArr[getIndex] =updatedUser
    this._router.navigate(['users',updatedUser.userId],{
      queryParams:{userRole:updatedUser.userId}
    })
    this._snackbarService.openSnackBar(`The User ${updatedUser.userName} is updated successfully`)
  }
  removeUser(id:string){
    //api call to remove id 
    let getIndex = this.usersArr.findIndex(user=>user.userId===id);
    this.usersArr.splice(getIndex,1)
    this._router.navigate(['users'])
    this._snackbarService.openSnackBar(`The User is removed successfully`)
  }
}
