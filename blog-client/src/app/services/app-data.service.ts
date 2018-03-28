import {Injectable} from '@angular/core';
import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }  

  getUsers() {
    return this.http.get('http://localhost:8090/api/users').map(res => res.json());
  }
}