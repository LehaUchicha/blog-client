import { Component} from '@angular/core';

import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { RouterModule, Routes } from '@angular/router'; 
import { ActivatedRoute} from '@angular/router';
import { CommentService } from 'app/services/comment.service';
import { Comment } from "app/models/comment";
  
@Component({
    selector: 'message-app',
    templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})
export class MessageComponent { 
	
	
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute, private commentService: CommentService){   
		
		
  } 
  
 
    
}