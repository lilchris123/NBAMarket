import { Injectable } from '@angular/core';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopPlayerService {

  topPlayer(players: Player[]){
    const observer =new Observable(o =>{
      o.next(
        players.sort((a,b) => {
        if (a.overall < b.overall)
          return 1;
        else if(a.overall > b.overall)
          return -1;
        else  
          return 0;
      }));
    });
    return observer;
  }


}
