import { Article } from "../model/article";
import { Match } from "../model/match";
import { MatchsPoule } from "../model/matchsPoule";
import { Player } from "../model/player";
import { Poule } from "../model/poule";
import { Rules } from "../model/rules";
import { Team } from "../model/team";


/**
 * This class is containing all needed data.
 */
export class DataBase {

    private _tournamentName: string;
    private _tournamentId: string;
    private _rules: string;
    private _teams : Team[];
    private _poules: Poule[];
    private _players: Player[];
    private _matchs: MatchsPoule[];
    private _articles: Article[];

    constructor(data: any) {
        if (data != null) { // FOR MOCK ONLY - remove when real database file
            this._tournamentName = data.tournamentName;
            console.log('[System] Welcome to ' + this._tournamentName);

            this._tournamentId = data.tournamentId;
            console.error('tournament id should be with the name of the json no inner the json itself, cause it is create two variable, one in JSON and one in name')
            console.log('[System] Tournament Id is ' + this._tournamentId);

            this._rules = this.constructRules(data.rules);
            console.log("[System] Generate rules with " + this._rules.length + " characters");

            this._teams = this.constructTeams(data.teams);
            console.log("[System] Generate " + this._teams.length + " teams");
        }
    };

    getTournamentName(): string {
        return this._tournamentName;
    }

    getTournamentId(): string {
        return this._tournamentId;
    }

    getRules(): string {
        return this._rules;
    }

    getTeams(): Team[] {
        return this._teams;
    }

    getPoules(): Poule[] {
        return this._poules;
    }

    getMatchs(): MatchsPoule[] {
        return this._matchs;
    }

    getArticles(): Article[] {
        this._articles.sort((article1, article2) => article1.id - article2.id);
        return this._articles;
    }

    // RULES CONSTRUCTION
    /////////////////////

    private constructRules(rules): string {
        return new Rules(rules).getContent();
    }

    // PLAYER CONSTRUCTION
    //////////////////////

    // we don't have player in data but we have team that have player so we need to keep this implementation

    private constructPlayers(players): Player[] {
        const tournamentPlayers: Player[] = [];
        players.forEach(player => tournamentPlayers.push(this.toPlayerDomain(player)));
        return tournamentPlayers;
    }

    private toPlayerDomain(player): Player {
        return new Player(
        player.id,
        player.firstName,
        player.lastName,
        player.pseudo);
    }

    // Team constructinon
    /////////////////////

    private constructTeams(teams): Team[] {
        // todo
        return null;
    }

    // FOR MOCK ONLY - remove when real database file
    /////////////////////////////////////////////////

    setTournamentName(tournamentName: string): void {
         this._tournamentName = tournamentName;
    }

    setTournamentId(tournamentId: string): void {
        this._tournamentId = tournamentId;
    }

    setRules(rules: string): void {
        this._rules = rules;
    }

    setTeams(teams: Team[]): void {
        this._teams = teams;
    }

    setPoules(poules: Poule[]) {
        this._poules = poules;
    }

    setArticles(articles: Article[]) {
        this._articles = articles;
    }

    setMatchs(matchs: MatchsPoule[]) {
        this._matchs = matchs;
    }
}