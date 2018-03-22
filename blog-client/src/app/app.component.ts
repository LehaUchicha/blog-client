import { Component } from '@angular/core';
import { PostService } from "app/services/post.service";
import { Post } from "app/models/post";

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
  
    post: Post=new Post(null, "null", "null"); // данные вводимого пользователя      
    receivedPost: Post; // полученный пользователь
    done: boolean = false;	
    
    submit(post: Post){
        this.postService.postData(post)
                .subscribe(
                    (data: Post) => {this.receivedPost=data; this.done=true;},
                    error => console.log(error)
                );
    }
	
	deletePost(post: Post){
        this.postService.deleteData(post)
                .subscribe(
                    (data: Post) => {this.receivedPost=data; this.done=true;},
                    error => console.log(error)
                );
    }
}
