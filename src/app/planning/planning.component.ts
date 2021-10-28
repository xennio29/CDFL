import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';
import { MatchsPoule } from '../data-model/model/matchsPoule';
import { Poule } from '../data-model/model/poule';

@Component({
  selector: 'tlc-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  matchs: MatchsPoule[] = [];
  selectedMatchPoule: MatchsPoule;

  constructor(private dataService: DataService) {
    this.dataService.getMatchs().subscribe(result => this.matchs = result);
  }
  ngOnInit(): void {
  }
}
