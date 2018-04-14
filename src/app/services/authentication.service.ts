import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }
    constructor(private http: HttpClient) { }

    public login(username: string, password: string) {
        return this.http.post<any>('http://localhost:8080/api', { "userName": username, "password": password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user) {
                  console.log(user);
                  this.loggedIn.next(true);
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        this.loggedIn.next(false);
        localStorage.removeItem('currentUser');
    }
}
