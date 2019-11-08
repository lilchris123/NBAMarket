import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  price: number;

  playersPg: number=1;

  constructor(private dataSv: DataService) {}

  ngOnInit() {
    this.price= 15;
    this.loadPlayers();
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
