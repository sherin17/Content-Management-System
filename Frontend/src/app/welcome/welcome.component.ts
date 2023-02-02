import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PostsService } from '../posts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  categories : any[] = []
  posts : any[] = []

  constructor(private http : HttpClient, private postsService : PostsService, public auth : AuthService) { }

  ngOnInit(): void {
    this.getCategory()
    this.getAllPosts()
  }
  
  // Getting available categories
  getCategory(){
    this.http.get('http://localhost:3000/categories').subscribe((categories)=>{
      this.categories = JSON.parse(JSON.stringify(categories))
    })
  }

  // Getting all stores posts
  getAllPosts(){
    this.postsService.getAllPosts().subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
    })
  }

  // Get posts by category
  getPosts(category:any){
    this.postsService.getPosts(category.Name).subscribe((posts)=>{
      this.posts = JSON.parse(JSON.stringify(posts))
    })
  }

  // Remove a post
  removePost(post:any){
    this.http.delete('http://localhost:3000/posts/'+ post._id).subscribe(()=>{
      alert('Post deleted')
      this.getAllPosts()
    })
  }
}