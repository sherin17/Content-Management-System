import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {

  categories : any[] = []

  // For storing post data
  postData = {
    Title : '',
    Author : '',
    Content : '',
    Category : '',
    UserId : '',
    Date : ''
  }

  constructor(private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getCategory()
    // Retrieving post details
    let postId = localStorage.getItem('editPostId')
    this.http.get('http://localhost:3000/posts/edit/' + postId).subscribe((post:any)=>{
      this.postData = JSON.parse(JSON.stringify(post[0]))
    })
  }

  // For getting list of available categories
  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }

  // Update post function
  updatePost(){
    this.http.put('http://localhost:3000/posts', this.postData).subscribe(()=>{
      alert('Post updated')
      this.router.navigateByUrl('myposts')
    })
  }
}