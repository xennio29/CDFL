import { Component, Input, OnInit } from '@angular/core';
import { MatchsPoule } from 'src/app/data-model/model/matchsPoule';
import { Poule } from 'src/app/data-model/model/poule';

@Component({
  selector: 'tlc-poule-planning',
  templateUrl: './poule-planning.component.html',
  styleUrls: ['./poule-planning.component.scss']
})
export class PoulePlanningComponent implements OnInit {
  
  @Input() matchsPoule: MatchsPoule;

  constructor() { }

  ngOnInit(): void {
  }

}
