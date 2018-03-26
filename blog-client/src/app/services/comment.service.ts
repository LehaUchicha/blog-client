import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Comment } from "app/models/comment";
 
@Injectable()
export class CommentService {
	
	commentUrl = "http://localhost:8090/api/comments";
	
   constructor(private http: Http) {
   }
 
   getComments(): Observable<Comment[]> {	   
      return this.http.get(this.commentUrl)
         .map(this.extractData)
         .catch(this.handleError);
   }  
   
    createComment(comment: Comment):Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		return this.http.post(this.commentUrl, comment, options)
				   .map(success => success.status)
				   .catch(this.handleError);
    }
   
   deletePostById(commentId: string): Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: cpHeaders });
	return this.http.delete(this.commentUrl +"/comment/"+ commentId)
	       .map(success => success.status)
               .catch(this.handleError);
    }
	
	updateCommentById(comment: Comment):Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });		
        return this.http.put(this.commentUrl +"/comment/"+ comment.id, comment, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
	
	getCommentById(commentId: string): Observable<Comment> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		console.log(this.commentUrl +"/comment/"+ commentId);
		return this.http.get(this.commentUrl +"/comment/"+ commentId)
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
}