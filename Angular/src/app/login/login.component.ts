import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
 loginForm:FormGroup
  ngOnInit() {
    this.loginForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required])
    });
  }
  onSubmit(){
 const email=this.loginForm.value.email
 const password=this.loginForm.value.password
 console.log(email,password)
 this.auth.loginUser(email,password)
  }
}
