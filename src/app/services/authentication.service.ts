import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConstantsService } from '../services/constants.service'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private constant: ConstantsService) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.constant.API_ENDPOINT}/users/authenticate`, { username: username, password: password })
            .pipe(map(resp => {
                // login successful if there's a jwt token in the response
                if (resp.user && resp.token) {
                    
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(resp));
                }

                return resp.user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}