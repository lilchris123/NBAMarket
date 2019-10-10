import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamName: string = 'Warriors';
  teamLocation: string= 'Golden State'
  offensiveRating: number = 90;
  defensiveRating: number = 90;
  overallRating: number = 90;
  constructor() { }

  ngOnInit() {
  }

}
