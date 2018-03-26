import { Component} from '@angular/core';

import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { RouterModule, Routes } from '@angular/router'; 
import { ActivatedRoute} from '@angular/router';
import { CommentService } from 'app/services/comment.service';
import { Comment } from "app/models/comment";
  
@Component({
    selector: 'post-app',
    templateUrl: './post.component.html',
	styleUrls: ['./app.component.css']
})
export class PostComponent { 
	id;
	post: Post;
	statusCode;
	comments;
	comment: Comment;
	
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute, private commentService: CommentService){
	    this.id = activateRoute.snapshot.params['id'];	
		this.postService.getPostById(this.id)
	   .subscribe(article => {
	            this.post = article;  
				this.comment =  new Comment(null, "", "", article);				
	   },
           errorCode =>  this.statusCode = errorCode);  
		   
		this.comments = postService.getCommentsByPostId(this.id);
		
		
  } 
  
  createComment(comment: Comment){
        this.commentService.createComment(comment)
                .subscribe(
                    successCode => {console.log(successCode)},
                    error => console.log(error)
                );
		window.location.reload();
    }
    
}