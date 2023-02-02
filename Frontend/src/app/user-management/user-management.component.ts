import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersModel } from './users.model';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  users : UsersModel[] = []

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }

  // Get details of registered users from server
  getUsers(){
    this.http.get('http://localhost:3000/users').subscribe((users)=>{
      this.users = JSON.parse(JSON.stringify(users))
    })
  }

  // For changing user roles
  changeRole(user:any){
    this.http.put('http://localhost:3000/changerole', user).subscribe(()=>{
      this.ngOnInit()
    })
  }
}