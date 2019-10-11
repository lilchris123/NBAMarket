import { Injectable } from '@angular/core';
import { Player } from './player/player.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseURL = 'http://localhost:8080/';
  players: Player[];

  constructor(private http: HttpClient) { }

  getAllPlayers(){
  
    let obs = this.http.get(`${this.baseURL}api/players`,{
    headers: new HttpHeaders().set("Authorization", "Basic " + btoa("admin:password"))
  });
  return obs;
  }

  getAllTeams(){
  
    let obs = this.http.get(`${this.baseURL}api/teams`,{
    headers: new HttpHeaders().set("Authorization", "Basic " + btoa("admin:password"))
  });
  return obs;
  }
}
