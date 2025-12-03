import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tournament } from '../model/tournament';
import { Player } from '../model/player';
import tournaments from "./../../../assets/tournamentsData.json"

// 1. Interfaces TypeScript pour typer la réponse Gviz (facultatif mais recommandé)

/** Représente une seule valeur dans la ligne (chaque cellule) */
interface CellValue {
  v: any; // La valeur de la cellule
  f?: string; // La valeur formatée (si différente de 'v')
}

/** Représente une ligne de données (un enregistrement) */
interface Row {
  c: (CellValue | null)[]; // Le tableau des cellules
}

/** Représente la structure complète de la table de données */
interface TableData {
  cols: any[];
  rows: Row[];
}

/** Représente l'objet de réponse complet après le nettoyage */
interface GvizResponse {
  version: string;
  reqId: string;
  status: string;
  sig: string;
  table: TableData;
}

// 2. La fonction asynchrone pour faire la requête

const QUALIFIED_PLAYERS_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1NtP8KdzDcWl2RgzeBEHT0TBtP5kMbhozqYKPF_2xS9E/gviz/tq?tqx=out:json&gid=350794940';
const EVENT_NAME_COLUMN_ID = 3;
const EVENT_ORGANISER_COLUMN_ID = 2;
const EVENT_DATE_COLUMN_ID = 8;
const EVENT_COUNT_COLUMN_ID = 4;
const EVENT_FIRST_QUALIFIED_PLAYER_COLUMN_ID = 5;
const EVENT_SECOND_QUALIFIED_PLAYER_COLUMN_ID = 6;

/**
 * Récupère le contenu d'une Google Sheet via l'exportation Gviz et le retourne en JSON.
 * @returns {Promise<GvizResponse>} Un objet JSON contenant les données de la table.
 */
async function fetchSheetData(): Promise<GvizResponse> {
  try {
    const response = await fetch(QUALIFIED_PLAYERS_SHEET_URL);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    // La réponse Gviz est brute et doit être lue comme du texte
    const textData = await response.text();

    // 3. Nettoyage et Parsing
    // Le texte commence par "/*O_o*/\ngoogle.visualization.Query.setResponse("
    // et se termine par ");". Nous devons retirer cet habillage.
    
    // Position de début de l'objet JSON (après le préfixe)
    const jsonStart = textData.indexOf('setResponse(') + 'setResponse('.length; 
    
    // Position de fin (avant le dernier ");")
    const jsonEnd = textData.lastIndexOf(')'); 
    
    if (jsonStart === -1 || jsonEnd === -1) {
        throw new Error("Impossible de trouver l'objet JSON dans la réponse Gviz.");
    }
    
    // Extraction de la chaîne JSON pure
    const jsonString = textData.substring(jsonStart, jsonEnd);
    
    // Conversion de la chaîne JSON en objet TypeScript/JavaScript
    const data: GvizResponse = JSON.parse(jsonString);

    return data;

  } catch (error) {
    console.error("Échec de la récupération des données de la feuille :", error);
    throw error;
  }
}



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
        // Appel de la fonction et traitement des données
      fetchSheetData()
        .then(data => {
        
        // Les données de la table se trouvent dans 'data.table.rows'
        const tournaments = data.table.rows;

        this._tournaments = this.extractTournaments(tournaments)

        observer.complete();

      })
      .catch(err => {
        // Gestion des erreurs
        console.log("Arrêt du processus en raison d'une erreur.", err);
      });
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
    this.printQualifiedPlayerCount(tournaments);
    return tournaments;
  }

  private toTournamentDomain(tournamentJSON): Tournament {
    var qualifierPlayerList = this.extractPlayerList(tournamentJSON);
    var date = tournamentJSON.c[EVENT_DATE_COLUMN_ID].f ? tournamentJSON.c[EVENT_DATE_COLUMN_ID].f : "No Date";
    return new Tournament(
      tournamentJSON.c[EVENT_NAME_COLUMN_ID].v,
      tournamentJSON.c[EVENT_ORGANISER_COLUMN_ID].v,
      date,
      tournamentJSON.c[EVENT_COUNT_COLUMN_ID].f,
      this.toPlayersDomain(qualifierPlayerList)
    );
  }

  private extractPlayerList(tournamentJSON) {
    if(tournamentJSON.c[EVENT_SECOND_QUALIFIED_PLAYER_COLUMN_ID]) {
      return tournamentJSON.c[EVENT_FIRST_QUALIFIED_PLAYER_COLUMN_ID].v + ";" + tournamentJSON.c[EVENT_SECOND_QUALIFIED_PLAYER_COLUMN_ID].v
    }
    return tournamentJSON.c[EVENT_FIRST_QUALIFIED_PLAYER_COLUMN_ID].v;
  }

  private toPlayersDomain(playersJSON: String): Player[] {
    const playersArray = playersJSON.split(';');
    return playersArray.map((value: string, index: number, array: string[]) => new Player(value));
  }

  private printQualifiedPlayerCount(tournaments: Tournament[]): void {
    var playerCount = 0;
    console.log(tournaments.length + " tournaments were organized for CDF Legacy 2026.")
    tournaments.forEach(tournament => {
      var qualifiedPlayersCount = tournament.qualifiedPlayers.length;
      playerCount = playerCount + qualifiedPlayersCount
    });
    console.log(playerCount + " players are qualified for CDF Legacy 2026.")
  }
}
