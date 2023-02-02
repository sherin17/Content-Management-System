import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth : AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRole(route)
  }

  // Route guard based on user role
  checkRole(route : ActivatedRouteSnapshot){
    let userRole = this.auth.getRole()
    let permission = false

    route.data['role'].forEach((element:any) => {
      
      if(element === userRole){
        permission = true
      }
    });
    return permission
  }
}