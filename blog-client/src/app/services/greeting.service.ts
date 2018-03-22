import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Greeting } from "app/models/greeting";
 
@Injectable()
export class GreetingService {
   constructor(private http: Http) {
   }
 
   getGreetings(): Observable<Greeting[]> {
      return this.http.get("http://localhost:8080/greeting")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}