import { Injectable } from '@angular/core';
import { Player } from '../model/player.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ConstantsService} from './constants.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  players: Player[];

  constructor(private http: HttpClient, private constants: ConstantsService) { 
  }


  getAllPlayers(){
    let obs = this.http.get(`${this.constants.playersUrl}`);
  return obs;
  }

  getAllTeams(){
  
    let obs = this.http.get(`${this.constants.teamsUrl}`);
  return obs;
  }
  
}
