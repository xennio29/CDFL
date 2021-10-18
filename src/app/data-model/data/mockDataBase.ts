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
        allTeams.push(new Team('Digitalesses', 'EPITECH',
            new Player(1, 'TITOUAN', 'BEGUERE', 'RaimeiManta'),
            new Player(2, 'Maxime', 'Cousinie', 'macgamer31'),
            new Player(3, 'Léo', 'Maliczak', 'Stuuck lron'),
            new Player(4, 'Pierre', 'Ilari', 'Pierre0807'),
            new Player(5, 'Jugurta', 'Zaïdi', 'xyxuu')
        ));
        allTeams.push(new Team('Chomagerie ', 'UT1',
            new Player(1, 'Hamid', 'ATROUNE', 'DRAKEN'),
            new Player(2, 'Lakhdar', 'NOUAR', 'Abdu Roziq'),
            new Player(3, 'Hakim', 'NOUAR', 'STYL3SPROD'),
            new Player(4, 'Ilyes', 'HARZALI', 'MolotovKnüt'),
            new Player(5, 'Zakaria', 'LOUDAGH', 'Zakichan31')
        ));
        allTeams.push(new Team('Petit 7', 'ENSEEIHT',
            new Player(1, 'Oscar', 'LE GRANCHÉ', 'Invisi Balll'),
            new Player(2, 'Jules', 'ARRA', 'Jeune Roulio'),
            new Player(3, 'Nathan', 'ROY', 'Hervé le Routier'),
            new Player(4, 'Mathieu', 'SALAUZE', 'Fan 2 Shiva'),
            new Player(5, 'Tom', 'Portafaix', 'Raquaza12345')
        ));
        allTeams.push(new Team('Confrérie du Malaise', 'ENSEEIHT',
            new Player(1, 'Théo', 'KOTSONIS', 'δαrksαsυkε'),
            new Player(2, 'Grégoire', 'HONVAULT', 'ρrinceChαrming'),
            new Player(3, 'Quentin', 'FRATY', 'OAB'),
            new Player(4, 'Tom', 'MASSAI', 'DreadFog'),
            new Player(5, 'Édouard', 'LEFIZELIER', 'Sel de guérende')
        ));
        allTeams.push(new Team('KPR', '3IL',
            new Player(1, 'Gabriel', 'ROUET', 'Kobal'),
            new Player(2, 'Filip', 'STOGREN', 'Fish Lip'),
            new Player(3, 'Lucas', 'SALINAS', 'Le Soldat Royal'),
            new Player(4, 'Dylan', 'NOVIER', 'StuckSilverr'),
            new Player(5, 'Adrien', 'VALVERDE', 'Etareneva 1')
        ));
        allTeams.push(new Team('C\'est une bonne situation scribe ?', 'UT2',
            new Player(1, 'Rémy', 'MESTRE', 'Toastos'),
            new Player(2, 'Nicolas', 'DOUMENC', 'Ruzzan'),
            new Player(3, 'Lucas', 'ARNAL', 'Keyniix'),
            new Player(4, 'Tom', 'FERRASSE', 'Thumflumch'),
            new Player(5, 'Sylvain', 'MESTRE', 'Shult')
        ));
        allTeams.push(new Team('E-Sport-Noobies', 'ESN81',
            new Player(1, 'Guillaume', 'Dax', 'PaulRicard4ever'),
            new Player(2, 'Quentin', 'Costes', 'UnZiziFurtif'),
            new Player(3, 'Pierre', 'Tubeuf', 'xad11'),
            new Player(4, 'Ousman ', 'Hassani', 'Hyuk Kang'),
            new Player(5, 'Claudian', 'Camus', 'Clau81')
            //new Player(5, 'Mathieu', 'Almon', 'mathieu012')
        ));
        allTeams.push(new Team('La meilleure table', 'EPITECH',
            new Player(1, 'Alexandre', 'CORNILLE', 'eldiabloss974'),
            new Player(2, 'Théo', 'BELY', 'superguppy31'),
            new Player(3, 'Kéziah', 'IMER', 'Jubıko'),
            new Player(4, 'Thomas', 'PAPAIX', 'Deviltix66'),
            new Player(5, 'Simon', 'VERMEULEN', 'Capichef Azerlus')
        ));
        allTeams.push(new Team('Riftricks7', 'ENSEEIHT',
            new Player(1, 'Romain', 'Barda-Chatain', 'WarGun31'),
            new Player(2, 'Julien', 'Guilhem', 'Invocasombre'),
            new Player(3, 'Florian', 'Carpentier', 'EzX Oni'),
            new Player(4, 'Maxime', 'Barnabé', 'VrEkEI'),
            new Player(5, 'Romain', 'Fournier', 'Papaya inter')
        ));



        var fakeTeam = new Team('futur name', 'Futur school',
        new Player(1, 'top', 'Je suis', 'a futur top laner'),
        new Player(2, 'jungle', 'Je suis', 'a futur jungle'),
        new Player(3, 'mid', 'Je suis', 'a futur mid laner'),
        new Player(4, 'adc', 'Je suis', 'a futur bop laner'),
        new Player(5, 'supp', 'Je suis', 'a futur support')
    )

        allTeams.push(fakeTeam);
        allTeams.push(fakeTeam);
        allTeams.push(fakeTeam);


        this.setTeams(allTeams);
        var allPoules: Poule[] = [];
        for (let index = 0; index < allTeams.length/4; index++) {
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