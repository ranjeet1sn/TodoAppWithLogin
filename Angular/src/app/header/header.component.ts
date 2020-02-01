import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checked = false
  constructor(private router:Router,private auth:AuthService) { }
  ngOnInit() {
  }
  logout(){
  this.auth.onLogout()
  }

}
