import { Component, OnInit } from '@angular/core';
import { Player } from '../player/player.model';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent implements OnInit {
  players: Player[]
  
  constructor() {
     this.players =[
       {
       name: 'Stephen Curry',
       team: 'Warriors',
       position: 'PG',
       overall: 95
     },
     {
      name: 'LeBron James',
      team: 'Lakers',
      position: 'SF',
      overall: 97
    },
    {
      name: 'Kevin Durant',
      team: 'Nets',
      position: 'SF',
      overall: 96
    },
    {
      name: 'Kawhi Leonard',
      team: 'Clippers',
      position: 'SF',
      overall: 97
    },
    ];
  }

  ngOnInit() {
  }

}
