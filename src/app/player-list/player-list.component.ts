import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { DataService } from '../services/data.service';
import { TopPlayerService } from '../services/top-player.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  price: number;
  constructor(private dataSv: DataService, private topPlayerSv: TopPlayerService) {}

  ngOnInit() {
    this.price= 15;
    this.loadPlayers();
    this.topPlayerSv.topPlayer(this.players).subscribe((topPlayer: Player[]) =>{
      console.log(`${topPlayer[0].first_name} ${topPlayer[0].last_name}`)
    });
  }

  loadPlayers(){
    this.dataSv.getAllPlayers()
    .subscribe((data: Player[])=>{
      console.log(data);
      this.players = data;
    },
    err =>{
      console.log(err);
    }
    );
  }

}
