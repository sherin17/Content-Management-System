import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerData = {
    Name : '',
    Email : '',
    Password : '',
    UserRole : 'User'
  }

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  // Sending new user data to server
  registerUser(){
    this.http.post('http://localhost:3000/register', this.registerData).subscribe((data:any)=>{
      var regStatus = data

      if(regStatus.regStatus == true){
        alert('Registered successfully')
        this.router.navigateByUrl('login')
      }
      else{
        alert('Account already exists')
      }
    })
  }
}