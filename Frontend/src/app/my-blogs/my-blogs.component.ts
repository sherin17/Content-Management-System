import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-blogs.component.html',
  styleUrls: ['./my-blogs.component.css']
})
export class MyPostsComponent implements OnInit {

  categories : any[] = []
  posts : any[] = []

  constructor(private http : HttpClient, private postsService : PostsService, private router : Router) { }

  ngOnInit(): void {
   
    this.getAllMyPosts()
  }

  // Get all stored posts
  getAllMyPosts(){
    this.postsService.getAllMyPosts().subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
    })
  }

  // Get posts by category
  getMyPosts(category:any){
    this.postsService.getMyPosts(category.Name).subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
 })
  }

  // Delete a post
  deletePost(post:any){
    this.http.delete('http://localhost:3000/posts/'+ post._id).subscribe(()=>{
      alert('Post deleted')
      this.getAllMyPosts()
    })
  }

  // Edit a post
  editPost(post:any){
    localStorage.setItem('editPostId', post._id.toString())
    this.router.navigateByUrl('/editPost')
  }
}