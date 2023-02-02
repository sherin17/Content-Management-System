import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Getting token to decide logged in status
  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  // Getting user role
  getRole(){
    return localStorage.getItem('userRole')
  }
}