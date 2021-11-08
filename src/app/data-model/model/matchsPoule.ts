import { Match } from "./match";
import { Poule } from "./poule";

export class MatchsPoule {

    public name: string;
    public matchs: Match[] = [];

    constructor(poule: Poule, matchs?: Match[]) {
        this.name = poule.name;
        this.matchs = matchs;
    }
}