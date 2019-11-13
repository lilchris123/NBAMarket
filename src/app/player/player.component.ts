import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  
@Input('player') player: Player;


  constructor() {
  }

  ngOnInit() {
    this.player.price= 1000* this.player.overall+ 20.5 * this.player.overall;
  }

}
