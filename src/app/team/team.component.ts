import { Component, OnInit, Input} from '@angular/core';
import { Team } from '../model/team.model';
import { Player } from '../model/player.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input('team') team: Team;

  constructor() { }

  ngOnInit() {
  }

}
