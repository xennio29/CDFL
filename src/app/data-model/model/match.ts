import { throws } from "assert";
import { listenerCount } from "process";
import { throwError } from "rxjs";
import { Team } from "./team";

export class Match {

    public team1: Team;
    public team2: Team;
    public date: string;
    public team1score: number;
    public team2score: number;

    constructor(team1: Team, team2: Team, date: string, team1score?: number, team2score?: number) {
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
        this.team1score = team1score !== null ? team1score : 0;
        this.team2score = team2score !== null ? team2score : 0;
    }

    getScoreForTeam(teamName) {
        if (teamName === this.team1.name) {
            return this.team1score
        }
        if (teamName === this.team2.name) {
            return this.team2score
        }
        console.log("[WARNING] unproper team score");
    }
}