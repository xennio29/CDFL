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
  alreadyQualifiedPlayers: PlayerWithEvent[] = [];
  inputPlayers: string;
  outputPlayers: string;

  constructor(private dataService: DataService) {
    this.dataService.tournamentsEmitter.subscribe(result => {
      this.tournaments = result;
      this.tournaments.forEach(tournament => {
        var qualifiedPlayers = tournament.qualifiedPlayers;
        qualifiedPlayers.forEach(qualifiedPlayer => {
          const playerWithEvent = {firstNameAndLastName: qualifiedPlayer.firstNameAndLastName, eventName: tournament.name + " - " + tournament.organiser};
          this.alreadyQualifiedPlayers.push(playerWithEvent);
        });
      });
    });
    this.dataService.askData();
  }

  ngOnInit(): void {
  }

  checkPlayers() {
    this.outputPlayers = this.inputPlayers.split('\n')
                              .filter(playerName => !this.alreadyQualifiedPlayers.some(alreadyQualifiedPlayer => alreadyQualifiedPlayer.firstNameAndLastName === playerName))
                              .join('\n')
    console.log(this.outputPlayers);
  }
}

export interface PlayerWithEvent {
  firstNameAndLastName: string;
  eventName: string;
}
