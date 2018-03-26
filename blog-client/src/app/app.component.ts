import { Component, OnInit } from '@angular/core';
import { PostService } from "app/services/post.service";

import { RouterModule, Routes } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'app';
  posts;
  
  constructor(private postService: PostService){
	  this.posts = postService.getPosts();
  }  
  
    
	
}
