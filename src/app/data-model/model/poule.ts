import { Team } from "./team";

export class Poule {

    public name: string;
    public team1: Team;
    public team2: Team;
    public team3: Team;
    public team4: Team;

    constructor(name: string, team1: Team, team2: Team, team3: Team, team4: Team) {
        this.name = name;
        this.team1 = team1;
        this.team2 = team2;
        this.team3 = team3;
        this.team4 = team4;
    }
}