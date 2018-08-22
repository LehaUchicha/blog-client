import {Injectable} from'@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable} from 'rxjs/Rx';
import {Message} from "app/models/message";

@Injectable()
export class MessageService {

postUrl = "http://localhost:8090/api/dialogs";

constructor(private http: Http) {}

   getMessagesByUserId(messageId: string): Observable<Message[]> {
   return this.http.get(this.postUrl+"/users/"+messageId)
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
