import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';
import { Match } from '../data-model/model/match';
import { MatchsPoule } from '../data-model/model/matchsPoule';
import { Poule } from '../data-model/model/poule';

@Component({
  selector: 'tlc-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  matchs: MatchsPoule[] = [];
  matchsFinal: MatchsPoule[] = [];
  selectedMatchPoule: MatchsPoule;
  selectedMatchFinalPoule: MatchsPoule;

  constructor(private dataService: DataService) {
    this.dataService.getMatchs().subscribe(result => this.matchs = result);
    this.dataService.getMatchsFinale().subscribe(result => this.matchsFinal = result);

  }
  ngOnInit(): void {
  }

  getScore(match: Match): string {
    if (match !== undefined && match.team1Score !== 0 && match.team2Score !== 0) {
      return match.team1Score + '-' + match.team2Score;
    }
    return 'VS';
  }
}
