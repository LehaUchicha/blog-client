import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from "app/models/post";
 
@Injectable()
export class PostService {
   constructor(private http: Http) {
   }
 
   getPosts(): Observable<Post[]> {	   
      return this.http.get("http://localhost:8090/api/posts")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
   
   postData(post: Post){
	   const body = {id: post.id, title: post.title, text: post.text };
	   return this.http.post('http://localhost:8090/api/post', body);
   }   
   
   deleteData(post: Post){
	   const body = {id: post.id, title: post.title, text: post.text };
	   return this.http.delete('http://localhost:8090/api/post', body);
   }
   
}