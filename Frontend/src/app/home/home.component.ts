import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : any[] = []
  posts : any[] = []

  constructor(private http : HttpClient, private postsService : PostsService, public auth : AuthService) { }

  ngOnInit(): void {
    
    this.getAllPosts()
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

}