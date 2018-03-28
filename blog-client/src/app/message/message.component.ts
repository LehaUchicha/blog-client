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
export class MessageComponent { 
	
	
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute, private commentService: CommentService){   
		
		
  } 
  
 
    
}