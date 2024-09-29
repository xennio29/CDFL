import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-model/data/data.service';
import { Tournament } from '../data-model/model/tournament';

@Component({
  selector: 'cdfl-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  tournaments: Tournament[];

  constructor(private dataService: DataService) {
    this.dataService.tournamentsEmitter.subscribe(result => {
      this.tournaments = result;
    });
    this.dataService.askData();
  }

  ngOnInit(): void {
  }
}
