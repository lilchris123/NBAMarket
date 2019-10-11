import { Injectable } from '@angular/core';
import { PlayerListComponent } from './player-list/player-list.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopPlayerService {

  topPlayer(list: PlayerListComponent){
    const observer =new Observable(o =>{
      o.next(
        list.players.sort((a,b) => {
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
