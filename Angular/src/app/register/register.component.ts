import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }
  registerForm:FormGroup
  ngOnInit() {
    this.registerForm=new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
   const email=this.registerForm.value.email
   const password=this.registerForm.value.password
   this.auth.signUpUser(email,password)
 }

}
