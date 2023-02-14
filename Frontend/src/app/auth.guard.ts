import { Injectable } from '@angular/core';
import {  CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : AuthService) {}

  // Route guard based on logged in status
  canActivate(): boolean {
    return this.auth.isLoggedIn()
  }
}