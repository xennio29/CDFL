import { Component, OnInit } from '@angular/core';
import { DataService, } from '../data-model/data/data.service';
import { Team } from '../data-model/model/team';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'tlc-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent {

  teams: Team[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getTeams().subscribe(result => this.teams = result);
  }
}
