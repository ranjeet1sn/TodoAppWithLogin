import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private auth:AuthService,private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,status:RouterStateSnapshot){
      if(!this.auth.isAuthenticated()){
          console.log('sss')
          this.router.navigate(['/login'])}
        return this.auth.isAuthenticated()
     
    }
    
}