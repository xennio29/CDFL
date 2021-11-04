import { Match } from "./match";
import { Poule } from "./poule";

export class MatchsPoule {

    private FIRST_DATE = "Lundi 8 novembre";
    private SECOND_DATE = "Mercredi 10 novembre";
    private THIRD_DATE = "Lundi 15 novembre";

    public name: string;
    public matchs: Match[] = [];

    constructor(poule: Poule, matchs?: Match[]) {
        this.name = poule.name;
        
        if(!matchs) {
            this.matchs.push(new Match(poule.team1, poule.team2, this.FIRST_DATE));
            this.matchs.push(new Match(poule.team3, poule.team4, this.FIRST_DATE));
    
            this.matchs.push(new Match(poule.team1, poule.team3, this.SECOND_DATE));
            this.matchs.push(new Match(poule.team2, poule.team4, this.SECOND_DATE));
    
            this.matchs.push(new Match(poule.team1, poule.team4, this.THIRD_DATE));
            this.matchs.push(new Match(poule.team2, poule.team3, this.THIRD_DATE));
        }
    }
}