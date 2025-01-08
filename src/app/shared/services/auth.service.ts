import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userLoginState:boolean =false;
  constructor(
    private _router :Router
  ) { }

  //signUp

 // login
 onAppLogin(userCredentials :{email:string,password:string}){
    //api call for login
    if(userCredentials.email === "jhon@gmail.com" && userCredentials.password ==="zaqZAQ!"){
      this.userLoginState =true;
      //if user is login successfully then redirect to dashboard
      //userInfo
      localStorage.setItem('tokenValue' ,'JWT token taken from LS')
      localStorage.setItem('userRole',"BUYER")
      this._router.navigate(['home'])

    }else if(userCredentials.email ==="jen@gmail.com" && userCredentials.password === "zaqZAQ!"){
      this.userLoginState =true
        //if user is login successfully then redirect to dashboard
      //userInfo
      localStorage.setItem('tokenValue' ,'JWT token taken from LS')
      localStorage.setItem('userRole',"ADMIN")
      this._router.navigate(['home'])
 
      }else if(userCredentials.email ==="may@gmail.com" && userCredentials.password === "zaqZAQ!"){
        this.userLoginState =true
          //if user is login successfully then redirect to dashboard
        //userInfo
        localStorage.setItem('tokenValue' ,'JWT token taken from LS')
        localStorage.setItem('userRole',"SUPER_ADMIN")
        this._router.navigate(['home'])
       
        }else{
           alert(`Invalid Email or Password`)
        }
    }
    isAuthenticated():Promise<boolean>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(localStorage.getItem('tokenValue')){
            this.userLoginState =true
          }else{
            this.userLoginState =false
            this._router.navigate(['/'])
          }
          resolve(this.userLoginState)
        },400)
      })
    }
    logOutFromApp(){
      //ls remove token userRole
      localStorage.removeItem('tokenValue')
      localStorage.removeItem('userRole')
      this._router.navigate(['/'])
    }
 }

