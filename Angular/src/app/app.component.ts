import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB2NPwKxXcbchzHhedgyw_aEB147I3DNOc",
      authDomain: "todoapp-8834e.firebaseapp.com",
     });
    }
  }

