import { Component, OnInit } from '@angular/core';
import { Team } from '../team/team.model';
import { DataService } from '../data.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Team[];

  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams(){
    this.dataSrv.getAllTeams().subscribe((data: any[]) =>{
      console.log(data);
      this.teams=data;
    } )
  }
}
