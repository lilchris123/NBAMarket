import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../services/constants.service'

import { User } from '../model/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private constant: ConstantsService) { }

    getAll() {
        return this.http.get<User[]>(`${this.constant.apiUrl}/users`);
    }

    getById(id: number) {
        return this.http.get(`${this.constant.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${this.constant.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${this.constant.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.constant.apiUrl}/users/` + id);
    }
}