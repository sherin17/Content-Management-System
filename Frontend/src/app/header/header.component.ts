import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true

  constructor(private http : HttpClient, private router : Router, public auth : AuthService) { }

  ngOnInit(): void {
  }

  // Logout user
  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('userRole')
    this.router.navigateByUrl('')
  }
}