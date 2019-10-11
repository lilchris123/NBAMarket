import { Component, OnInit } from '@angular/core';
import { PlayerListComponent } from '../player-list/player-list.component';
import { TopPlayerService } from '../top-player.service';
import { Player} from '../player/player.model';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {

  constructor(private list: PlayerListComponent, private topPlayerSv: TopPlayerService) {
  }

  ngOnInit() {
    this.topPlayerSv.topPlayer(this.list).subscribe((topPlayer: Player[]) =>{
      console.log(`${topPlayer[0].first_name} ${topPlayer[0].last_name}`)
    });
  }

}
