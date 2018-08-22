import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from "app/models/user";
import { Comment } from "app/models/comment";
 
@Injectable()
export class ProfileService {
	
	postUrl = "http://localhost:8090/api/users";
	
   constructor(private http: Http) {
   }
 
   getUsers(): Observable<User[]> {	   
      return this.http.get(this.postUrl)
         .map(this.extractData)
         .catch(this.handleError);
   }

	getUserById(userId: string): Observable<User> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: cpHeaders });
		console.log(this.postUrl +"/user/"+ userId);
		return this.http.get(this.postUrl +"/user/"+ userId)
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