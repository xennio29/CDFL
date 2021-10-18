import { RulesComponent } from "src/app/rules/rules.component";
import { Article } from "../model/article";
import { MatchsPoule } from "../model/matchsPoule";
import { Player } from "../model/player";
import { Poule } from "../model/poule";
import { Team } from "../model/team";
import { Rules } from "../model/rules";
import { DataBase } from "./database";

export class MockDataBase extends DataBase {

    private TEAM_BY_POULE = 4;

    constructor(rules: string) {
        super(null);
        this.addBaseData();
        this.addTeamData();
        this.addRules(rules);
        this.addArticles();
    }

    private addBaseData(): void {
        this.setTournamentId('TLC');
        this.setTournamentName('Toulouse League Cup');
    }

    private addRules(rules: string): void {
        this.setRules(new Rules(rules).getContent());
    }

    private addTeamData(): void {
        var allTeams: Team[] = [];
        for (let index = 1; index < 65; index++) {
            allTeams.push(new Team('Team' + index, 'School' + index,
                new Player(1, 'John', 'Do', 'IamATopLaner'),
                new Player(2, 'John', 'Do', 'IamAJungle'),
                new Player(3, 'John', 'Do', 'IamAMidLaner'),
                new Player(4, 'John', 'Do', 'IamABopLaner'),
                new Player(5, 'John', 'Do', 'IamASupport')
            ))
        };
        this.setTeams(allTeams);
        var allPoules: Poule[] = [];
        for (let index = 0; index < 16; index++) {
            allPoules.push(new Poule('Poule ' + (index + 1),
                allTeams[this.TEAM_BY_POULE*index],
                allTeams[this.TEAM_BY_POULE*index + 1],
                allTeams[this.TEAM_BY_POULE*index + 2],
                allTeams[this.TEAM_BY_POULE*index + 3]
            ));
        }
        this.setPoules(allPoules);
        var matchsPoule: MatchsPoule[] = [];
        allPoules.forEach( poule => matchsPoule.push(new MatchsPoule(poule)));
        this.setMatchs(matchsPoule);
    }

    private addArticles(): void {
        this.setArticles([
            new Article(1, 'Welcome to Toulouse League Cup', "C'est l'ouverture du tournoi inter-école organisé par SOPRA STERIA pour les étudients de la région toulousaine ! Les inscriptions sont ouvertes et les entrainements commencent !")
        ]);
    }
}