import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from "app/models/post";
import { Comment } from "app/models/comment";
 
@Injectable()
export class PostService {
	
	postUrl = "https://alex-blog-server.herokuapp.com/posts";
	
   constructor(private http: Http) {
   }
 
   getPosts(): Observable<Post[]> {	   
      return this.http.get(this.postUrl)
         .map(this.extractData)
         .catch(this.handleError);
   }  
   
    createPost(post: Post):Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		return this.http.post(this.postUrl, post, options)
				   .map(success => success.status)
				   .catch(this.handleError);
    }
   
   deletePostById(postId: string): Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
	return this.http.delete(this.postUrl +"/post/"+ postId)
	       .map(success => success.status)
               .catch(this.handleError);
    }
	
	updatePostById(post: Post):Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });		
        return this.http.put(this.postUrl +"/post/"+ post.id, post, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
	
	updatePost(post: Post):Observable<number> {
		let cpHeaders = new Headers({'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		return this.http.put(this.postUrl, post, options)
				   .map(success => success.status)
				   .catch(this.handleError);
    }
	
	getPostById(postId: string): Observable<Post> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		console.log(this.postUrl +"/post/"+ postId);
		return this.http.get(this.postUrl +"/post/"+ postId)
		   .map(this.extractData)
		   .catch(this.handleError);
		}	
		
	getCommentsByPostId(postId: string): Observable<Comment> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		console.log(this.postUrl +"/post/"+ postId);
		return this.http.get(this.postUrl +"/post/"+ postId + "/comments")
		   .map(this.extractData)
		   .catch(this.handleError);
		}	
	
	 private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
    }
	
	private extractData(res: Response) {
		let body = res.json();
        return body;
    }
	
	
	/*public toPost(data: string): Post {
        let jsonData = JSON.parse(data);  
        postData = new Post(jsonData.id, jsonData.name, jsonData.surename);
        return postData;
    }*/
   
}
