import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Tournament } from '../model/tournament';
import { Player } from '../model/player';
import tournaments from "./../../../assets/tournamentsData.json"

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public tournamentsEmitter: EventEmitter<Tournament[]>;
  private _tournaments: Tournament[] = [];

  private loaded = false;

  constructor(private http: HttpClient) { 
    this.tournamentsEmitter = new EventEmitter();
  }

  loadData(): Observable<any> {
    
    return new Observable<any> ((observer) => {
        this._tournaments = this.extractTournaments(tournaments.tournaments);
        observer.complete();
    });
  }

  // ASKER
  //////////////////////

  askData() {

    if(!this.loaded) {
      this.loadData().subscribe({
        complete: () => {
          this.loaded = true;
          this.emitData();
        }
      });
    } else {
      this.emitData();
    }
  }

  private emitData() {
    this.tournamentsEmitter.emit(this._tournaments);
  }

  private extractTournaments(tournamentsJSON): Tournament[] {
    const tournaments: Tournament[] = [];
    tournamentsJSON.forEach(tournament => tournaments.push(this.toTournamentDomain(tournament)));
    return tournaments;
  }

  private toTournamentDomain(tournamentJSON): Tournament {
    return new Tournament(
      tournamentJSON.name,
      tournamentJSON.organiser,
      tournamentJSON.date,
      tournamentJSON.playersCount,
      this.toPlayersDomain(tournamentJSON.qualifiedPlayer)
    );
  }

  private toPlayersDomain(playersJSON: String): Player[] {
    const playersArray = playersJSON.split(';');
    return playersArray.map((value: string, index: number, array: string[]) => new Player(value));
  }
}
