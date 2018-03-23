import { Component, OnInit } from '@angular/core';
import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  
    post: Post=new Post(null, "title", "text"); // данные вводимого пользователя   
	postIdToUpdate = null;	
    receivedPost: Post; // полученный пользователь
    done: boolean = false;	
	postForm = new FormGroup({
		id: new FormControl('', Validators.required),
       title: new FormControl('', Validators.required),
       text: new FormControl('', Validators.required)	   
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
	            this.postForm.setValue({ id: post.id, title: post.title, text: post.text});	   	     
	   },
          error => console.log(error));
   }
   
   updatePost() { 	
		let post = this.postForm.value;   
		this.postService.updatePostById(post)
	      .subscribe(successCode => {		  
		  this.done=true;
		},
		error => console.log(error));   
		window.location.reload();
    }
	
}
