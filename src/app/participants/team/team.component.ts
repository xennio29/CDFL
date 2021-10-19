import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/data-model/model/team';

@Component({
  selector: 'tlc-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  @Input() team: Team;

  constructor() {}
}