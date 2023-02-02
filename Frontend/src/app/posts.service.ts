import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  // Get posts by category
  getPosts(category:any){
    return this.http.get('http://localhost:3000/posts/'+category)
    }
    
  // Get all stored posts 
  getAllPosts(){
    return this.http.get('http://localhost:3000/posts')
  }

  // Get posts of a user by category
  getMyPosts(category:any){
    let user = localStorage.getItem('email')
    return this.http.get('http://localhost:3000/posts/'+ category + '/' + user)
    }

  // Get all posts of a user
  getAllMyPosts(){
    let user = localStorage.getItem('email')
    return this.http.get('http://localhost:3000/posts/all/' + user)
    }
  }