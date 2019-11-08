import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService} from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { UserToken } from '../model/usertoken.model';
import { User } from '../model/user.model';
import { ConstantsService } from '../services/constants.service';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private constant: ConstantsService) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.constant.baseUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(data => {
                // login successful if there's a jwt token in the response
                let jwtHelper = new JwtHelperService(); 
                let user: User;
                if (data && data.token) {
                    user= this.tokenToUser(jwtHelper.decodeToken(data.token));
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('currentToken', JSON.stringify(data.token));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentToken');
    }
    tokenToUser(userToken: UserToken): User{
        let user: User = new User();
        user.id= userToken.id;
        user.username= userToken.sub;
        user.role= userToken.role;
        user.first_name= userToken.first_name;
        user.last_name= userToken.last_name;
        return user;
    }
}