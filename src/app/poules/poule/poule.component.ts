import { Component, Input, OnInit } from '@angular/core';
import { Poule } from 'src/app/data-model/model/poule';
import { Team } from 'src/app/data-model/model/team';

@Component({
  selector: 'tlc-poule',
  templateUrl: './poule.component.html',
  styleUrls: ['./poule.component.scss']
})
export class PouleComponent implements OnInit {

  @Input() poule: Poule;

  teams: Team[] = [];

  constructor() {
  }
  
  ngOnInit(): void {
    this.teams.push(this.poule.team1);
    this.teams.push(this.poule.team2);
    this.teams.push(this.poule.team3);
    this.teams.push(this.poule.team4);
    this.teams.sort( (team1, team2) => team2.getScore() - team1.getScore())
  }
}
