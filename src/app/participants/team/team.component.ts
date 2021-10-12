import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/data-model/model/team';

@Component({
  selector: 'tlc-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  @Input() team: Team;

  topLanerLogo = 'assets/img/role icon/Top_icon.png';
  midLanerLogo = 'assets/img/role icon/Middle_icon.png';
  jungleLogo = 'assets/img/role icon/Jungle_icon.png';
  botLogo = 'assets/img/role icon/Bottom_icon.png';
  supportLogo = 'assets/img/role icon/Support_icon.png';

  constructor() {}
}