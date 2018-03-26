import { Component} from '@angular/core';

import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { RouterModule, Routes } from '@angular/router'; 
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
  
@Component({
    selector: 'post-app',
    templateUrl: './post.component.html',
	styleUrls: ['./app.component.css']
})
export class PostComponent { 
	id;
	post;
	statusCode;
	comments;
	private subscription: Subscription;
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute){
	    this.id = activateRoute.snapshot.params['id'];	
		this.postService.getPostById(this.id)
	   .subscribe(article => {
	            this.post = article;   	               
	   },
           errorCode =>  this.statusCode = errorCode);  
		   
		this.comments = postService.getCommentsByPostId(this.id);
  } 
    
}