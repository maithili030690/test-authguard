import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp } from 'src/app/shared/models/canDeactivate';
import { Iuser } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/services/users.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit,IcanDeactivateComp {
userId!:string;
userInfo!:Iuser;
userForm!:FormGroup;
isInEditMode:boolean =false;
updateBtnFlag :boolean = false;


  constructor(
    private _routes:ActivatedRoute,
    private _userService:UsersService,
    private _uuidServce:UuidService,                                                       
    private _router:Router
  ) { }


  ngOnInit(): void {

    this.userForm = new FormGroup({
      userName:new FormControl(null,[Validators.required]),
      userRole: new FormControl('Candidate',[Validators.required])
    })

    console.log(this._routes.snapshot.params['userId'])
    this.userId =this._routes.snapshot.params['userId']
    
    if(this.userId){
      this.isInEditMode=true;
      this.userInfo = this._userService.fetchUser(this.userId)
      this.userForm.patchValue(this.userInfo)
    }
    this._routes.queryParams
    .subscribe((params:Params)=>{
      console.log(params)

      if(params['userRole'].toLowerCase().includes('candidate')){
        this.userForm.disable()
        this.updateBtnFlag =true
      }else{
        this.userForm.enable()
        this.updateBtnFlag =false
      }
    })

   
  }
  onUserAdd(){
    if(this.userForm.valid){
      console.log(this.userForm.value)

      let userObj:Iuser={...this.userForm.value,
        userId:this._uuidServce.generateUuid()
      }
      this.userForm.reset()
      console.log(userObj);
      this._userService.postUser(userObj)
    }
  }
  onUserUpdate(){
    let updatedObj:Iuser ={...this.userForm.value,
      userId:this.userId
    }
    console.log(updatedObj)
    this.userForm.reset()
    this._userService.updateUser(updatedObj)
  }

  canDeactivate(){
    if(this.userForm.dirty){
      return confirm(`Are you sure you want to discard the changes`)
    }
    return false


  }
}
