import { Component, OnInit } from '@angular/core';
import { PostService } from "app/services/post.service";
import { ChangeDetectorRef } from '@angular/core';

import {UserService} from './services/user.service';

import { RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'app';
  posts;
  
  constructor(private postService: PostService, private router: Router, private userService: UserService, private cdRef:ChangeDetectorRef){
	  this.posts = postService.getPosts();
  }  
  
    
	ngAfterViewChecked() { 
    // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    this.cdRef.detectChanges();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }

  get isAdminUser() {
    return this.userService.isAdminUser();
  }

  get isUser() {
    return this.userService.isUser();
  }
	
}
