import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
token:string
  constructor(private router:Router) { }
  signUpUser(email: string, password: string) {
    console.log(email,password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => console.log(error)
        )
}
loginUser(email: string, password: string){
  firebase.auth().signInWithEmailAndPassword(email,password).then(
    (respnose)=>{
      this.router.navigate(['/header'])
      firebase.auth().currentUser.getIdToken().then(
        (token:string)=>{
          localStorage.setItem('token',JSON.stringify(token))}
      )
    }
  ).catch(
    (error)=>console.log(error)
  )
}
onLogout(){
  firebase.auth().signOut();
  this.token=null;
  this.router.navigate(['/login'])
}
isAuthenticated(){
  var token=JSON.parse(localStorage.getItem('token'));
  return token!=null
}
  }

