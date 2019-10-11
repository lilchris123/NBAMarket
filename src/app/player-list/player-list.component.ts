import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  
  constructor(private dataSv: DataService) {}

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers(){
    this.dataSv.getAllPlayers()
    .subscribe((data: any[])=>{
      console.log(data);
      this.players = data;
    },
    err =>{
      console.log(err);
    }
    );
  }


}
