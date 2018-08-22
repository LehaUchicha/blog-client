import { Component} from '@angular/core';

import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
  
@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
	styleUrls: ['./app.component.css']
})
export class HomeComponent { 
	posts;
	articleImgPath;
  
  constructor(private postService: PostService){
	  this.posts = postService.getPosts();
	  this.articleImgPath="./assets/images/article.png"
  }  
  
    post: Post=new Post(null, "", "", "", 0); // данные вводимого пользователя   
	postIdToUpdate = null;	
    receivedPost: Post; // полученный пользователь
    done: boolean = false;	
	postForm = new FormGroup({
		id: new FormControl('', Validators.required),
       title: new FormControl('', Validators.required),
       shortText: new FormControl('', Validators.required),
	   fullText: new FormControl('', Validators.required),
	   likes: new FormControl('', Validators.required)		   
   });
    
    createPost(post: Post){
        this.postService.createPost(post)
                .subscribe(
                    successCode => {console.log(successCode)},
                    error => console.log(error)
                );
		window.location.reload();
    }
	
	deletePost(postId: string) {      
      this.postService.deletePostById(postId)
	      .subscribe(successCode => {		  
		  this.done=true;
		},
		error => console.log(error));   
		window.location.reload();
   }
   
   loadPostToEdit(postid: string){
	   this.postService.getPostById(postid)
	   .subscribe(post => {	       
				console.log(postid);
				this.postIdToUpdate = postid;	   
	            this.postForm.setValue({ 
										id: post.id, 
										title: post.title, 
										shortText: 
										post.shortText,
										fullText: post.fullText, 
										likes: post.likes});	   	     
	   },
          error => console.log(error));
   }
   
   updatePost() { 	
		let post = this.postForm.value;   
		this.postService.updatePost(post)
	      .subscribe(successCode => {		  
		  this.done=true;
		},
		error => console.log(error));   
		//window.location.reload();
    }
}