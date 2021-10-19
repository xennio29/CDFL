import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';
import { MatchsPoule } from '../data-model/model/matchsPoule';

@Component({
  selector: 'pr-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  matchsPoules: MatchsPoule[] = [];  
  columns;
  rowHeight;

  constructor(private dataService: DataService) {
    this.dataService.getMatchs().subscribe(result => this.matchsPoules = result);
  }

  ngOnInit(): void {
    this.columns = (window.innerWidth <= 500) ? 1 : 2;
    this.rowHeight = (window.innerWidth <= 500) ? "700px" : "500px";

  }
}
