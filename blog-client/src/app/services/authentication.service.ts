import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {TOKEN_AUTH_PASSWORD, TOKEN_AUTH_USERNAME} from '../services/auth.constant';

@Injectable()
export class AuthenticationService {
  static AUTH_TOKEN = 'http://localhost:8090/oauth/token';

  constructor(private http: Http) {
  }

  login(username: string, password: string) {
    let body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;	
    let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD)});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(AuthenticationService.AUTH_TOKEN, body, options)
      .map(res => res.json())
      .map((res: any) => {
        if (res.access_token) {
          return res.access_token;
        }
        return null;
      });
  }
  
  loginn(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }));
            
    }
}