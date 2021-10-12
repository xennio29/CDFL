import { Match } from "./match";
import { Poule } from "./poule";

export class MatchsPoule {

    private FIRST_DATE = "this is the first date";
    private SECOND_DATE = "this is the second date";
    private THIRD_DATE = "this is the third date";

    public name: string;
    public matchs: Match[] = [];

    constructor(poule: Poule) {
        this.name = poule.name;
        
        this.matchs.push(new Match(poule.team1, poule.team2, this.FIRST_DATE));
        this.matchs.push(new Match(poule.team3, poule.team4, this.FIRST_DATE));

        this.matchs.push(new Match(poule.team1, poule.team3, this.SECOND_DATE));
        this.matchs.push(new Match(poule.team2, poule.team4, this.SECOND_DATE));

        this.matchs.push(new Match(poule.team1, poule.team4, this.THIRD_DATE));
        this.matchs.push(new Match(poule.team2, poule.team3, this.THIRD_DATE));
    }
}