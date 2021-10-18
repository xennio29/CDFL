import { Component, OnInit } from '@angular/core';
import { DataService, } from '../data-model/data/data.service';
import { Team } from '../data-model/model/team';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'tlc-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  teams: Team[] = [];
  columns;

  constructor(private dataService: DataService) {
    this.dataService.getTeams().subscribe(result => this.teams = result);
  }

  ngOnInit(): void {
     this.columns = (window.innerWidth <= 500) ? 1 : ((window.innerWidth <= 1000) ? 2 : 4) ;
  }
}
