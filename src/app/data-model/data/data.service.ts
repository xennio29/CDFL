import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { Match } from '../model/match';
import { MatchsPoule } from '../model/matchsPoule';
import { Player } from '../model/player';
import { Poule } from '../model/poule';
import { Team } from '../model/team';
import { DataBase } from './database';
import { DataBaseProvider } from './DataBaseProvider';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* The database once it's import. */
  private database: DataBase = null;

  constructor(private dataBaseProvider: DataBaseProvider, private router: Router) { 
    dataBaseProvider.dataBaseEmitter.subscribe( result => this.database = result);
  }

  loadDatabase(): boolean {
    if(this.database == null) {
      this.dataBaseProvider.loadMockDatabase();
    }
    return true;
  }

  databaseCall( method: string ) {
    return new Observable<any> ( observer => {

      if(this.database !== null) {
        observer.next(this.database[method]());
        observer.complete();
      } else {
        this.dataBaseProvider.dataBaseEmitter.subscribe(result => {
            observer.next(result[method]());
            observer.complete();
        });
      }
    });
  }

  getTournamentName(): Observable<string> {
    return this.databaseCall('getTournamentName');
  }

  getTournamentId(): Observable<string> {
    return this.databaseCall('getTournamentId');
  }

  getRules(): Observable<string> {
    return this.databaseCall('getRules');
  }

  getTeams(): Observable<Team[]> {
    return this.databaseCall('getTeams');
  }

  getPoules(): Observable<Poule[]> {
    return this.databaseCall('getPoules');
  }

  getArticles(): Observable<Article[]> {
    return this.databaseCall('getArticles');
  }

  getMatchs(): Observable<MatchsPoule[]> {
    return this.databaseCall('getMatchs');
  }
}
