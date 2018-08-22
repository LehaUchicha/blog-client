import { Component} from '@angular/core';

import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { RouterModule, Routes } from '@angular/router'; 
import { ActivatedRoute} from '@angular/router';
import { ProfileService } from 'app/services/profile.service';
import { User } from "app/models/user";
  
@Component({
    selector: 'profile-app',
    templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent { 
  
    user: User;
	statusCode: string;
	
  
  constructor(private activateRoute: ActivatedRoute, private profileService: ProfileService){
	    //this.id = activateRoute.snapshot.params['id'];	
		this.profileService.getUserById("1")
	   .subscribe(u => {
	            this.user = u;  
				//this.comment =  new Comment(null, "", "", article);				
	   },
           errorCode =>  this.statusCode = errorCode);  
		   
		//this.comments = postService.getCommentsByPostId(this.id);
  } 
}