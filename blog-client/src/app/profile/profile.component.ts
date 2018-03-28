import { Component} from '@angular/core';

import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { RouterModule, Routes } from '@angular/router'; 
import { ActivatedRoute} from '@angular/router';
import { CommentService } from 'app/services/comment.service';
import { Comment } from "app/models/comment";
  
@Component({
    selector: 'profile-app',
    templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent { 
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute, private commentService: CommentService){  
		
  }  

    
}