import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    Email : '',
    Password : ''
  }

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  // Login User function
  loginUser(){
    this.http.post<any>('http://localhost:3000/login', this.loginData).subscribe((data)=>{
      var logData = data
      // If login successful
      if(logData.token){
        localStorage.setItem('token', logData.token)
        localStorage.setItem('name', logData.name)
        localStorage.setItem('email',logData.email)
        localStorage.setItem('userRole',logData.userRole)
        this.router.navigateByUrl('home')
      }
      // If login failed
      else{
        var message = logData.message
        alert(message)
      }
    })
  }
  
}