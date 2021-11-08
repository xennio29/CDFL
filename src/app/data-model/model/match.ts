import { throws } from "assert";
import { listenerCount } from "process";
import { throwError } from "rxjs";
import { Team } from "./team";

export class Match {

    private WINNING_POINTS: number = 3;
    private DRAW_POINTS: number = 1;
    private LOOSING_POINTS: number = 0;

    public team1: Team;
    public team2: Team;
    public date: string;
    public team1Score: number;
    public team2Score: number;

    constructor(team1: Team, team2: Team, date: string, team1score?: number, team2score?: number) {
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
        this.team1Score = team1score ? team1score : 0;
        this.team2Score = team2score ? team2score : 0;
        if(team1score) {
           this.dispatchPoints(); 
        }
    }

    dispatchPoints() {
        if (this.team1Score > this.team2Score) {
            this.team1.addScore(this.WINNING_POINTS);
            this.team2.addScore(this.LOOSING_POINTS);
        }
        else if (this.team2Score > this.team1Score) {
            this.team2.addScore(this.WINNING_POINTS);
            this.team1.addScore(this.LOOSING_POINTS);
        }
        else {
            this.team1.addScore(this.DRAW_POINTS);
            this.team2.addScore(this.DRAW_POINTS);
        }
    }
}