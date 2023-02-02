import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewPostComponent implements OnInit {

  categories : any[] = []

  postData = {
    Title : '',
    Author : localStorage.getItem('name'),
    Content : '',
    Category : '',
    UserId : localStorage.getItem('email'),
    Date : new Date().toLocaleString()
  }

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getCategory()
  }

  // Getting available categories from server
  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }

  // Sending new post to server
  createPost(){
    this.http.post('http://localhost:3000/posts', this.postData).subscribe((data:any)=>{
      if(data.status === 'success'){
        alert(data.message)
        this.router.navigateByUrl('home')
      }
      else{
        alert('Post not created. Try again.')
      }
    })
  }
}