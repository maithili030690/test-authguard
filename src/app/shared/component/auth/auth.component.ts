import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
loginForm!:FormGroup;
signUpForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createLogInForm()
    this.createSignUpForm()
  }

  createLogInForm(){
    this.loginForm =new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
    })
  }
  createSignUpForm(){
    this.signUpForm =new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),
      confirmpassword:new FormControl(null,[Validators.required]),
    })
  }
}
